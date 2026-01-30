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
    <form onSubmit={(e) => onSubmit(e)} className="p-6 space-y-6">
      {/* Quantity */}
      {subcategory.options.map((option) => (
        <div key={option.id} className="flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-600">
            {option.label}
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => decrease(option.id)}
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 transition text-lg"
            >
              −
            </button>

            <span className="w-6 text-center font-semibold">
              {quantities[option.id]}
            </span>

            <button
              type="button"
              onClick={() => increase(option.id)}
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 transition text-lg"
            >
              +
            </button>
          </div>
        </div>
      ))}

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
  );
};

export default SubcategoryModalForm;
