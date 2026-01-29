import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  const categories = [
    {
      id: 1,
      icon: (
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
      ),
      title: "Room Service",
      subtitle: "Essentials and Linens",
    },
    {
      id: 2,
      icon: (
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
          <path d="M3 3h.01"></path>
          <path d="M7 5h.01"></path>
          <path d="M11 7h.01"></path>
          <path d="M3 7h.01"></path>
          <path d="M7 9h.01"></path>
          <path d="M3 11h.01"></path>
          <rect width="4" height="4" x="15" y="5"></rect>
          <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path>
          <path d="m13 14 8-2"></path>
          <path d="m13 19 8-2"></path>
        </svg>
      ),
      title: "Cleaning",
      subtitle: "Housekeeping",
    },
    {
      id: 3,
      icon: (
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
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      title: "Technical",
      subtitle: "Repairs and maintenance",
    },
    {
      id: 4,
      icon: (
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
          <path d="M8 22h8"></path>
          <path d="M7 10h10"></path>
          <path d="M12 15v7"></path>
          <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
        </svg>
      ),
      title: "Minibar",
      subtitle: "Refills and beverages",
    },
    {
      id: 5,
      icon: (
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
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
        </svg>
      ),
      title: "Other Request",
      subtitle: "Special needs",
    },
  ];

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
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            title={cat.title}
            subtitle={cat.subtitle}
            icon={cat.icon}
          />
        ))}
      </section>
    </div>
  );
};

export default Categories;
