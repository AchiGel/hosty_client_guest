import CategoryCardArrow from "../assets/CategoryCardArrow";
import { getIcon } from "../utils/iconMapper";

const CategoryCard = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: string;
}) => {
  return (
    <div className="group w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="size-12 sm:size-14 rounded-xl bg-neutral-50 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-[#C6A667] transition-colors duration-300">
          {getIcon(icon)}
        </div>
        <div>
          <h2 className="font-medium text-base">{title}</h2>
          <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold group-hover:text-[#C6A667] transition-colors">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="lucide lucide-chevron-right w-5 h-5 text-neutral-300 group-hover:text-[#111111] transition-colors">
        <CategoryCardArrow />
      </div>
    </div>
  );
};

export default CategoryCard;
