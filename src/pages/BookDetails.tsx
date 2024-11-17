import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../data/books';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { Heart, ShoppingCart } from 'lucide-react';

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));
  const { addItem: addToCart } = useCartStore();
  const { addItem: addToWishlist } = useWishlistStore();

  if (!book) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Book not found</p>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{book.author}</p>
              
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${
                      i < book.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-8">{book.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-blue-600">
                  ${book.price.toFixed(2)}
                </span>
                <div className="flex gap-4">
                  <button
                    onClick={() => addToWishlist(book)}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <Heart className="w-5 h-5" />
                    Add to Wishlist
                  </button>
                  <button
                    onClick={() => addToCart(book)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}