import { Link } from "react-router-dom";

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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.536 21.686C14.574 21.7807 14.6401 21.8615 14.7253 21.9175C14.8106 21.9736 14.9109 22.0022 15.0129 21.9996C15.1149 21.997 15.2136 21.9633 15.2959 21.9029C15.3781 21.8426 15.44 21.7585 15.473 21.662L21.973 2.662C22.0051 2.57339 22.0112 2.4775 21.9907 2.38555C21.9702 2.2936 21.9239 2.20939 21.8573 2.14277C21.7907 2.07616 21.7064 2.02989 21.6145 2.00939C21.5225 1.98888 21.4267 1.99499 21.338 2.027L2.33805 8.527C2.24155 8.56009 2.15747 8.62191 2.09712 8.70417C2.03677 8.78642 2.00302 8.88517 2.00041 8.98715C1.9978 9.08914 2.02644 9.18949 2.08251 9.27472C2.13857 9.35996 2.21937 9.426 2.31405 9.46399L10.2441 12.644C10.4947 12.7444 10.7225 12.8945 10.9136 13.0852C11.1047 13.276 11.2552 13.5035 11.356 13.754L14.536 21.686Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.8541 2.14697L10.9141 13.086"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 7H17V17"
                stroke="#C5A667"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 17L17 7"
                stroke="#C5A667"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default RequestButton;
