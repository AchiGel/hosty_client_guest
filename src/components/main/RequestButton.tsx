import { Link } from "react-router-dom";
import RequestIcon from "../../assets/RequestIcon";
import RequestArrow from "../../assets/RequestArrow";

const RequestButton = () => {
  return (
    <section className="pb-6">
      <Link
        to={"/categories"}
        className="max-w-73.75 w-full flex items-center justify-between p-4 sm:p-5 bg-[#111111] rounded-2xl text-white group hover:bg-neutral-800 transition-colors shadow-[0_15px_40px_-10px_rgba(0,0,0,0.2)] px-5"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-[#ffffff10] p-3">
              <RequestIcon />
            </div>
            <div className="flex flex-col text-white items-start">
              <h3 className="text-[15.6px] font-bold leading-6">
                Make a Request
              </h3>
              <p className="text-[#A3A3A3] text-[11.4px] leading-4">
                Room service and more
              </p>
            </div>
          </div>
          <div className="group-hover:rotate-45 transition-transform duration-300 ease-out">
            <RequestArrow />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default RequestButton;
