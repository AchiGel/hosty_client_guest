import type { SubcategoryType } from "../pages/CategoryDetails";

type Props = {
  subcategory: SubcategoryType;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  decrease: (id: number) => void;
  increase: (id: number) => void;
  instructions: string;
  setInstructions: React.Dispatch<React.SetStateAction<string>>;
  quantities: Record<number, number>;
};

const SubcategoryModalForm = ({
  onSubmit,
  subcategory,
  decrease,
  increase,
  instructions,
  setInstructions,
  quantities,
}: Props) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="p-5 sm:p-6 flex flex-col gap-5 sm:gap-6 bg-white max-h-[60vh] overflow-y-auto">
        {/* Quantity */}
        <div className="space-y-4">
          {subcategory.options.map((option) => (
            <div key={option.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-500 group-hover:text-[#C6A667] transition-colors">
                  <span className="font-bold text-sm">{option.id}</span>
                </div>
                <div>
                  <p className="text-[#111111] font-medium text-sm sm:text-base">
                    {option.label}
                  </p>
                  <p className="text-xs text-neutral-400">Lorem</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 bg-neutral-50 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => decrease(option.id)}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md bg-white shadow-sm text-neutral-600 hover:text-[#C6A667] hover:shadow disabled:opacity-50 transition-all"
                >
                  −
                </button>

                <span className="text-[#111111] font-semibold w-4 text-center text-sm sm:text-base">
                  {quantities[option.id] || 0}
                </span>

                <button
                  type="button"
                  onClick={() => increase(option.id)}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md bg-white shadow-sm text-neutral-600 hover:text-[#C6A667] hover:shadow transition-all"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-neutral-100" />
        {/* Special Instructions */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#111111]">
            Special instructions
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="E.g. leave at the door..."
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-sm text-[#111111] placeholder-neutral-400 focus:border-[#C6A667] focus:ring-[#C6A667] focus:ring-1 outline-none resize-none transition-all"
          />
        </div>
      </div>

      {/* Confirm Button */}
      <div className="p-5 sm:p-6 pt-2 bg-white">
        <button
          type="submit"
          className="w-full py-3 sm:py-3.5 px-4 bg-[#111111] hover:bg-black text-white font-medium rounded-xl shadow-lg shadow-neutral-200 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
        >
          <span>Confirm Request</span>
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
            className="lucide lucide-arrow-up-right w-4 h-4 text-[#C6A667] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </button>
        <p className="text-center text-xs text-neutral-400 mt-3">
          Estimated delivery time:
          <span className="text-[#C6A667] font-medium"> 10-15 minutes</span>
        </p>
      </div>
    </form>
  );
};

export default SubcategoryModalForm;
