import React, { useRef, useEffect } from 'react';
import { Search, ShoppingBag, BookOpen, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useSearch } from '../hooks/useSearch';
import SearchResults from './SearchResults';

export default function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const { query, setQuery, results } = useSearch();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setQuery('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setQuery]);

  return (
    <nav className="glass-effect fixed w-full z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <BookOpen className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="ml-2 text-2xl font-bold text-gray-200 group-hover:text-white transition-colors">
              Bokido
            </span>
          </Link>
          
          <div className="flex-1 max-w-2xl mx-8" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books, authors, or genres..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full bg-gray-800/50 border border-gray-700/50 
                         text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-500/50 
                         focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <SearchResults results={results} onClose={() => setQuery('')} />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              to="/wishlist" 
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <Heart className="h-6 w-6" />
            </Link>
            <Link 
              to="/cart" 
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 relative"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs 
                               rounded-full h-5 w-5 flex items-center justify-center 
                               animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}