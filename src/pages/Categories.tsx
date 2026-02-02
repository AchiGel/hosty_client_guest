import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { CATEGORIES } from "../constants/categories";

const Categories = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-3 items-center py-6">
        <h2 className="font-playfair text-[#182543] text-3xl font-normal leading-9 tracking-tight text-center">
          What do you <span className="text-[#C5A667]">need?</span>
        </h2>
        <p className="uppercase text-[11.1px] leading-4 text-[#A3A3A3] text-center">
          Select a category
        </p>
      </div>
      <section className="flex flex-col gap-3 pb-8">
        {CATEGORIES.map((cat) => (
          <Link key={cat.id} to={cat.title.replace(" ", "_")}>
            <CategoryCard
              title={cat.title}
              subtitle={cat.subtitle}
              icon={cat.icon}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Categories;
