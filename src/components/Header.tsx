import { Link, useLocation, useNavigate } from "react-router-dom";
import CartModal from "./modals/CartModal";

const Header = ({
  cartOpen,
  setCartOpen,
}: {
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const showBackButton = location.pathname !== "/";

  return (
    <header className="py-4 sm:py-6 flex items-center justify-between border-b border-gray-300">
      {cartOpen && <CartModal setCartOpen={setCartOpen} />}
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
        <Link to={"/"}>
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
        </Link>
      </div>

      <button
        className="relative flex items-center gap-2 rounded-full border bg-background px-3 py-2 text-foreground shadow-sm border-gray-200"
        aria-label="Cart"
        onClick={() => setCartOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-bag h-4 w-4"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
          <path d="M3 6h18"></path>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span className="text-xs font-semibold">Cart</span>
      </button>
    </header>
  );
};

export default Header;
