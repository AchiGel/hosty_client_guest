import toast from "react-hot-toast";
import { AMENITIES } from "../../constants/amenities";
import { useNavigate } from "react-router-dom";

const Amenities = () => {
  const navigate = useNavigate();
  return (
    <section className="pb-6">
      <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
        Amenities
      </p>
      <div className="grid grid-cols-2 gap-3 max-w-73.75">
        {AMENITIES.map((amenity) => (
          <button
            onClick={() => {
              toast.dismiss();
              toast(amenity.message, {
                id: amenity.id.toString(),
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="20"
                    width="20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ),
              });

              if (amenity.navigateTo) {
                navigate(amenity.navigateTo);
              }
            }}
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
    </section>
  );
};

export default Amenities;
