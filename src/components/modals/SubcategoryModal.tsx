import { useState } from "react";
import type { SubcategoryType } from "../../pages/CategoryDetails";

const SubcategoryModal = ({
  subcategory,
  onClose,
}: {
  subcategory: SubcategoryType;
  onClose: () => void;
}) => {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");

  const decrease = () => quantity > 1 && setQuantity(quantity - 1);
  const increase = () => setQuantity(quantity + 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
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
        <form className="p-6 space-y-6">
          {/* Quantity */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-600">
              Quantity
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={decrease}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 transition text-lg"
              >
                −
              </button>

              <span className="w-6 text-center font-semibold">{quantity}</span>

              <button
                type="button"
                onClick={increase}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 transition text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Special instructions
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Any notes for the staff?"
              className="w-full min-h-22.5 rounded-xl bg-neutral-100 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-black text-white py-3 font-semibold hover:bg-neutral-900 transition"
          >
            Confirm Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubcategoryModal;
