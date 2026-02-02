import CartModalClose from "../../assets/CartModalClose";
import CartModalRequest from "../../assets/CartModalRequest";
import CartModalSend from "../../assets/CartModalSend";
import { useCartStore } from "../../store/cartStore";
import CartModalItemCard from "../CartModalItemCard";

const CartModal = ({
  setCartOpen,
}: {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleSendAll = () => {
    console.log("Sending all items:", items);
    clearCart();
    setCartOpen(false);
  };

  return (
    <div
      onClick={() => setCartOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl w-full max-w-135 mx-4 shadow-xl flex flex-col gap-4 overflow-hidden max-h-[90vh]"
      >
        <button
          onClick={() => setCartOpen(false)}
          className="cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-10"
        >
          <CartModalClose />
        </button>

        <div className="bg-gray-50 flex flex-col">
          <div className="flex flex-col space-y-1.5 text-center sm:text-left p-6">
            <h2 className="text-lg font-semibold leading-none tracking-tight flex items-center gap-2 font-playfair">
              <CartModalRequest />
              Your requests
            </h2>

            <div className="flex-1 flex flex-col min-h-0 mt-4">
              {items.length === 0 ? (
                <div className="flex flex-1 items-center justify-center text-sm text-[#676f7e] py-8">
                  Cart is empty — add a few items and send them together.
                </div>
              ) : (
                <div className="space-y-3 overflow-y-auto max-h-40 pr-2">
                  {items.map((item) => (
                    <CartModalItemCard
                      key={item.id}
                      item={item}
                      updateQuantity={updateQuantity}
                      removeItem={removeItem}
                    />
                  ))}
                </div>
              )}

              <div className="mt-4 border-t pt-4">
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => clearCart()}
                    disabled={items.length === 0}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleSendAll}
                    disabled={items.length === 0}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#182543] text-[#eee8dd] hover:bg-[#18254391] shadow-sm hover:shadow-md h-10 px-4 py-2"
                  >
                    <CartModalSend />
                    Send all
                  </button>
                </div>
                <p className="mt-2 text-xs text-[#676f7e] text-left">
                  Sends everything as one batch to the hotel team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
