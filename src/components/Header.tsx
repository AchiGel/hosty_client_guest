import { Link, useLocation, useNavigate } from "react-router-dom";
import CartModal from "./modals/CartModal";
import HeaderBackIcon from "../assets/HeaderBackIcon";
import CartIcon from "../assets/CartIcon";

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
            <HeaderBackIcon />
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
        <CartIcon />
        <span className="text-xs font-semibold">Cart</span>
      </button>
    </header>
  );
};

export default Header;
