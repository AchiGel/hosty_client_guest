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
          <p className="truncate text-sm font-semibold">{item.name}</p>
          <p className="mt-0.5 text-xs text-[#676f7e] text-left">
            {item.categoryName}
          </p>
        </div>
        <button
          onClick={() => removeItem(item.id)}
          className="rounded-md p-2 text-[#676f7e] hover:bg-muted hover:text-foreground"
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
            className="lucide lucide-trash2 h-4 w-4"
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-lg bg-[#e8eaee] p-1">
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#f6f7f9] text-[#0f1729] shadow-sm"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span className="w-6 text-center text-sm font-semibold">
            {item.quantity}
          </span>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#f6f7f9] text-[#0f1729] shadow-sm"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartModalItemCard;
