import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Trash2 } from 'lucide-react';

export default function Cart() {
  const { items, removeItem, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {items.map((item) => (
                <div key={item.id} className="flex items-center p-6 border-b border-gray-200">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-20 h-28 object-cover rounded"
                  />
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.author}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-blue-600">${item.price.toFixed(2)}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg text-gray-600">Total</span>
                <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => clearCart()}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Clear Cart
                </button>
                <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}