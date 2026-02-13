import { useParams } from "react-router-dom";
import SubcategoryCard from "../components/SubcategoryCard";
import { useState } from "react";
import SubcategoryModal from "../components/modals/SubcategoryModal";
import { useHotelQuery } from "../hooks/useHotelQuery";
import { getIcon } from "../utils/iconMapper";
import type { Subcategory } from "../types/hotelTypes";

const CategoryDetails = () => {
  const params = useParams();
  const { data, isLoading, error } = useHotelQuery();
  const [selectedSubcategory, setSelectedSubcategory] =
    useState<null | Subcategory>(null);

  if (isLoading)
    return (
      <div className="flex-1 flex items-center justify-center">Loading...</div>
    );

  if (error) return <div>Error fetching data</div>;

  if (!data) return <div>No data found</div>;

  const filtered = data?.categories.filter(
    (cat) => cat.title.toLowerCase() === params.id?.replace("_", " "),
  );

  console.log(filtered);

  return (
    <div>
      <div className="flex flex-col gap-3 items-center py-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C6A667]/10 text-[#C6A667] mb-4">
          {getIcon(filtered[0].icon)}
          <span className="text-xs font-semibold uppercase tracking-wider">
            {filtered[0].title}
          </span>
        </div>
        <h2 className="font-playfair text-[#182543] text-3xl font-normal leading-9 tracking-tight text-center">
          What do you need
          <span className="text-[#C5A667]"> specifically?</span>
        </h2>
        <p className="uppercase text-[11.1px] leading-4 text-[#A3A3A3] text-center">
          Select a product
        </p>
      </div>
      <section className="grid grid-cols-2 gap-3 pb-8">
        {filtered[0].subcategories.map((sub) => (
          <SubcategoryCard
            key={sub.id}
            title={sub.title}
            subTitle={sub.subtitle}
            icon={sub.icon}
            onClick={() => setSelectedSubcategory(sub)}
          />
        ))}
      </section>
      {selectedSubcategory && (
        <SubcategoryModal
          subcategory={selectedSubcategory}
          onClose={() => setSelectedSubcategory(null)}
        />
      )}
    </div>
  );
};

export default CategoryDetails;
