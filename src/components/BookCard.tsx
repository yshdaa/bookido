import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';

interface BookProps {
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  rating: number;
}

export default function BookCard({ id, title, author, price, imageUrl, rating }: BookProps) {
  const { addItem: addToCart } = useCartStore();
  const { addItem: addToWishlist } = useWishlistStore();

  const book = { id, title, author, price, imageUrl, rating };

  return (
    <div className="glass-effect rounded-lg overflow-hidden card-hover">
      <Link to={`/book/${id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/book/${id}`}>
          <h3 className="font-semibold text-lg text-gray-200 line-clamp-1 hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-400 mt-1">{author}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-blue-400 font-bold">${price.toFixed(2)}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => addToWishlist(book)}
              className="p-2 text-gray-400 hover:text-rose-400 transition-colors transform hover:scale-110"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              onClick={() => addToCart(book)}
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}