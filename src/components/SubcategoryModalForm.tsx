import { useState } from "react";
import SubcategoryModalSend from "../assets/SubcategoryModalSend";
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
  const SPECIAL_TIME = [
    { id: 1, time: "Now", timeLabel: "10-15 min" },
    { id: 2, time: "30 min", timeLabel: "Half hour" },
    { id: 3, time: "1 hour", timeLabel: "Later" },
    { id: 4, time: "Custom", timeLabel: "Set time" },
  ];

  const [activeButtonId, setActiveButtonId] = useState<number | null>(1);

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
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
                  className="cursor-pointer w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md bg-white shadow-sm text-neutral-600 hover:text-[#C6A667] hover:shadow disabled:opacity-50 transition-all"
                >
                  −
                </button>

                <span className="text-[#111111] font-semibold w-4 text-center text-sm sm:text-base">
                  {quantities[option.id] || 0}
                </span>

                <button
                  type="button"
                  onClick={() => increase(option.id)}
                  className="cursor-pointer w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md bg-white shadow-sm text-neutral-600 hover:text-[#C6A667] hover:shadow transition-all"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-neutral-100" />
        {/* Special Time */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#111111]">
            When do you need it?
          </label>

          <div className="grid grid-cols-2 gap-2 mt-2">
            {SPECIAL_TIME.map((st) => {
              const isActive = activeButtonId === st.id;

              return (
                <button
                  type="button"
                  key={st.id}
                  onClick={() => setActiveButtonId(st.id)}
                  className={`cursor-pointer flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all
            ${
              isActive
                ? "border-[#c6a667] bg-[#c6a6671a]"
                : "border-[#e5e5e5] bg-[#fafafa] text-neutral-600"
            }
          `}
                >
                  <span className="font-semibold text-sm">{st.time}</span>
                  <span className="text-[10px] text-neutral-400">
                    {st.timeLabel}
                  </span>
                </button>
              );
            })}
          </div>
          {activeButtonId === 4 && (
            <div className="flex items-center gap-2 mt-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200">
              <span className="text-sm text-neutral-600">In</span>
              <input
                type="number"
                min={1}
                max={24}
                placeholder="3"
                className="w-16 h-9 rounded-lg border border-neutral-300 bg-white px-3 text-center text-sm font-semibold text-[#111111] focus:border-[#C6A667] focus:ring-1 focus:ring-[#C6A667] outline-none"
              />
              <span className="text-sm text-neutral-600">hours</span>
            </div>
          )}
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
          className="cursor-pointer w-full py-3.5 sm:py-4 px-4 bg-[#C6A667] hover:brightness-95 text-[#111111] font-semibold rounded-xl shadow-lg shadow-neutral-200 hover:shadow-xl transition-all flex items-center justify-center gap-2"
        >
          <SubcategoryModalSend />
          <span>Send Request</span>
        </button>
        <p className="text-center text-xs text-neutral-400 mt-3">
          Delivery:
          <span className="text-[#C6A667] font-medium"> 10-15 minutes</span>
        </p>
      </div>
    </form>
  );
};

export default SubcategoryModalForm;
