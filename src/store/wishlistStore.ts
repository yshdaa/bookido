import { create } from 'zustand';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  rating: number;
}

interface WishlistStore {
  items: Book[];
  addItem: (item: Book) => void;
  removeItem: (itemId: number) => void;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
  clearWishlist: () => set({ items: [] }),
}));