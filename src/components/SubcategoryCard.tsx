import { getIcon } from "../utils/iconMapper";

const SubcategoryCard = ({
  icon,
  title,
  subTitle,
  onClick,
}: {
  icon: string;
  title: string;
  subTitle: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer group p-4 rounded-2xl bg-white border border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-left"
    >
      <div className="size-12 rounded-xl bg-neutral-50 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-[#C6A667] transition-colors duration-300 mb-3">
        {getIcon(icon)}
      </div>
      <h4 className="font-semibold text-[#111111] text-sm mb-1 font-playfair">
        {title}
      </h4>
      <p className="text-xs text-neutral-400">{subTitle}</p>
    </button>
  );
};

export default SubcategoryCard;
