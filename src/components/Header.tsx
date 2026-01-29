import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const showBackButton = location.pathname !== "/";

  return (
    <header className="py-6 flex items-center justify-between border-b border-gray-300">
      <div className="flex items-center gap-3">
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors duration-300 ease-out rotate-225"
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
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 17L17 7"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-black text-white w-9 h-9 flex items-center justify-center font-semibold text-sm font-inter">
            EP
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold tracking-wider font-playfair">
              EPISODE
            </h1>
            <span className="text-xs text-[#C5A667] font-inter uppercase">
              Tbilisi
            </span>
          </div>
        </div>
      </div>

      <button
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-300 rounded-full transition-colors duration-300 ease-out cursor-pointer"
        aria-label="User profile"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
