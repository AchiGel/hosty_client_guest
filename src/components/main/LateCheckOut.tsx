const LateCheckOut = () => {
  return (
    <section>
      <button className="group relative w-full overflow-hidden rounded-2xl flex flex-col items-start p-5 cursor-pointer">
        <div className="absolute inset-0 bg-[url(/bg/background-1.jpg)] bg-no-repeat bg-center bg-cover group-hover:scale-110 transition-transform duration-300 ease-out" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col w-full items-start">
          <div
            className="bg-[#ffffff21] rounded-full p-1.5 flex items-center justify-center self-end mb-2 transition-transform duration-300 ease-out
                group-hover:rotate-45"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 7H17V17"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 17L17 7"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="mb-1 px-1.5 py-0.5 rounded-sm uppercase bg-[#C5A667] font-inter text-white text-[9px] font-bold leading-[13.5px] tracking-[0.45px] w-fit">
            Exclusive
          </span>

          <p className="font-playfair text-white text-lg font-bold leading-7 mb-0.5">
            Late Check-out Offer
          </p>

          <p className="font-inter text-[#ffffff80] text-[11.1px] leading-4">
            Stay until 4:00 PM
          </p>
        </div>
      </button>
    </section>
  );
};

export default LateCheckOut;
