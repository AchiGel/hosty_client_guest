import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { useHotelQuery } from "../hooks/useHotelQuery";

const Categories = () => {
  const { data, isLoading, error } = useHotelQuery();
  if (isLoading)
    return (
      <div className="flex-1 flex items-center justify-center">Loading...</div>
    );
  if (error) return <div>Error fetching categories</div>;
  if (!data) return <div>No data found</div>;
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
        {data.categories.map((cat) => (
          <Link key={cat.id} to={cat.title.toLowerCase().replace(" ", "_")}>
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
