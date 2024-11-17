import { create } from 'zustand';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  rating: number;
}

interface CartStore {
  items: Book[];
  addItem: (item: Book) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
  clearCart: () => set({ items: [] }),
}));