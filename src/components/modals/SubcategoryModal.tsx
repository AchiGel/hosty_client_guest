import { useState } from "react";
import type { SubcategoryType } from "../../pages/CategoryDetails";
import SubcategoryModalForm from "../SubcategoryModalForm";
import { useCartStore } from "../../store/cartStore";

const SubcategoryModal = ({
  subcategory,
  onClose,
}: {
  subcategory: SubcategoryType;
  onClose: () => void;
}) => {
  // States

  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [instructions, setInstructions] = useState("");
  const addItem = useCartStore((state) => state.addItem);
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

    Object.entries(quantities).forEach(([optionId, quantity]) => {
      if (quantity > 0) {
        const option = subcategory.options.find(
          (opt) => opt.id === Number(optionId),
        );
        if (option) {
          addItem(
            {
              id: `${subcategory.id}-${optionId}`,
              name: option.label,
              categoryName: subcategory.title,
              instructions: instructions,
            },
            quantity,
          );
        }
      }
    });

    setQuantities({});
    setInstructions("");

    onClose();
  };

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 4v16"></path>
                <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                <path d="M2 17h20"></path>
                <path d="M6 8v9"></path>
              </svg>
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
            className="text-neutral-400 hover:text-[#111111] transition-colors p-1 rounded-md hover:bg-neutral-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
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
        />
      </div>
    </div>
  );
};

export default SubcategoryModal;
