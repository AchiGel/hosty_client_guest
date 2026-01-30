import { AMENITIES } from "../../constants/amenities";

const Amenities = () => {
  return (
    <div className="pb-6">
      <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
        Amenities
      </p>
      <div className="grid grid-cols-2 gap-3 max-w-73.75">
        {AMENITIES.map((amenity) => (
          <button
            key={amenity.id}
            className="w-full p-4 rounded-xl bg-white border border-neutral-100 flex flex-col gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group active:scale-95"
          >
            <span className="text-[#C6A667] group-hover:scale-110 transition-transform">
              {amenity.icon}
            </span>
            <div className="text-left">
              <span className="text-sm font-semibold text-[#111111] block">
                {amenity.title}
              </span>
              <span className="text-[10px] text-neutral-400">
                {amenity.AccessTime}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
