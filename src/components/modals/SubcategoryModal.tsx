import { useState } from "react";
import SubcategoryModalForm from "../SubcategoryModalForm";
import { useCartStore } from "../../store/cartStore";
import SubcategoryBed from "../../assets/SubcategoryBed";
import SubcategoryClose from "../../assets/SubcategoryClose";
import ConfirmationModal from "./ConfirmationModal";
import toast from "react-hot-toast";
import AmenitiesToastIcon from "../../assets/AmenitiesToastIcon";
import type { Subcategory } from "../../types/hotelTypes";
import { useHotelQuery } from "../../hooks/useHotelQuery";

const SubcategoryModal = ({
  subcategory,
  onClose,
}: {
  subcategory: Subcategory;
  onClose: () => void;
}) => {
  // States
  const { data, isLoading, error } = useHotelQuery();
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [instructions, setInstructions] = useState("");
  const [activeButtonId, setActiveButtonId] = useState<number | null>(1);
  const [customTime, setCustomTime] = useState(3);
  const addItem = useCartStore((state) => state.addItem);
  const [formIsSent, setFormIsSent] = useState(false);
  // Handlers

  const increase = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrease = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  // On submit function

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasSelectedItems = Object.values(quantities).some(
      (quantity) => quantity > 0,
    );

    if (!hasSelectedItems) {
      toast.dismiss();
      toast("Please select at least one item", {
        icon: <AmenitiesToastIcon />,
      });
      return;
    }

    Object.entries(quantities).forEach(([optionId, quantity]) => {
      if (quantity > 0) {
        let deliveryTime = "Now";
        const timeObj = data?.specialTimes.find((t) => t.id === activeButtonId);
        if (timeObj) {
          if (timeObj.id === 4) {
            deliveryTime = `In ${customTime} hours`;
          } else {
            deliveryTime = timeObj.time;
          }
        }

        const option = subcategory.options.find(
          (opt) => opt.id === Number(optionId),
        );

        if (option) {
          addItem(
            {
              id: `${subcategory.title}-${subcategory.id}-${optionId}`,
              name: option.label,
              categoryName: subcategory.title,
              subcategoryId: subcategory.id,
              optionId: option.id,
              instructions,
              deliveryTime,
            },
            quantity,
          );
        }
      }
    });

    setFormIsSent(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data available</div>;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-neutral-100 flex items-center justify-between bg-linear-to-r from-white to-neutral-50">
          <div className="flex items-center gap-3">
            <div className="bg-[#C6A667]/10 p-2 rounded-lg text-[#C6A667]">
              <SubcategoryBed />
            </div>
            <div>
              <h3 className="text-[#111111] font-bold text-base sm:text-lg leading-tight font-playfair">
                {subcategory.title}
              </h3>
              <p className="text-neutral-500 text-xs font-medium">Room 402</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer text-neutral-400 hover:text-[#111111] transition-colors p-1 rounded-md hover:bg-neutral-100"
          >
            <SubcategoryClose />
          </button>
        </div>

        {/* Form */}
        <SubcategoryModalForm
          subcategory={subcategory}
          onSubmit={handleSubmit}
          decrease={decrease}
          increase={increase}
          instructions={instructions}
          setInstructions={setInstructions}
          quantities={quantities}
          specialTimes={data.specialTimes}
          activeButtonId={activeButtonId}
          setActiveButtonId={setActiveButtonId}
          customTime={customTime}
          setCustomTime={setCustomTime}
        />
      </div>
      {formIsSent && (
        <ConfirmationModal setFormIsSent={setFormIsSent} onClose={onClose} />
      )}
    </div>
  );
};

export default SubcategoryModal;
