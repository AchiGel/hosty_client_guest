import CartModalItemRemove from "../assets/CartModalItemRemove";
import type { CartItem } from "../store/cartStore";

const CartModalItemCard = ({
  item,
  updateQuantity,
  removeItem,
}: {
  item: CartItem;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
}) => {
  return (
    <div className="rounded-xl border bg-white p-3 text-[#0f1729] border-[#dcdfe5]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-left">
            {item.name}
          </p>
          <p className="mt-0.5 text-xs text-[#676f7e] text-left">
            {item.categoryName}
          </p>
        </div>
        <button
          onClick={() => removeItem(item.id)}
          className="cursor-pointer rounded-md p-2 text-[#676f7e] hover:bg-muted hover:text-foreground"
        >
          <CartModalItemRemove />
        </button>
      </div>
      {item.instructions && (
        <p className="mt-2 text-xs text-[#676f7e] text-left">
          Notes: {item.instructions}
        </p>
      )}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-lg bg-[#e8eaee] p-1">
          <button
            className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#f6f7f9] text-[#0f1729] shadow-sm"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span className="w-6 text-center text-sm font-semibold">
            {item.quantity}
          </span>
          <button
            className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#f6f7f9] text-[#0f1729] shadow-sm"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartModalItemCard;
