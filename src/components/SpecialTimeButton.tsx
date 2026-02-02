const SpecialTimeButton = ({
  activeButtonId,
  id,
  setActiveButtonId,
  time,
  timeLabel,
}: {
  activeButtonId: number | null;
  id: number;
  setActiveButtonId: React.Dispatch<React.SetStateAction<number | null>>;
  time: string;
  timeLabel: string;
}) => {
  const isActive = activeButtonId === id;
  return (
    <button
      type="button"
      onClick={() => setActiveButtonId(id)}
      className={`cursor-pointer flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all
            ${
              isActive
                ? "border-[#c6a667] bg-[#c6a6671a]"
                : "border-[#e5e5e5] bg-[#fafafa] text-neutral-600"
            }
          `}
    >
      <span className="font-semibold text-sm">{time}</span>
      <span className="text-[10px] text-neutral-400">{timeLabel}</span>
    </button>
  );
};

export default SpecialTimeButton;
