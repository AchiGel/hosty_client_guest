import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  image?: string;
  instructions?: string;
  categoryName?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item, quantity) => {
        if (quantity <= 0) return;

        const existingItem = get().items.find((i) => i.id === item.id);

        if (existingItem) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id
                ? {
                    ...i,
                    quantity: i.quantity + quantity,
                    instructions: item.instructions,
                  }
                : i,
            ),
          }));
          toast.success("Quantity updated");
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity }],
          }));
          toast.success("Added to cart");
        }
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
        toast.success("Removed from cart");
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
        toast.success("Cart cleared");
      },

      totalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
