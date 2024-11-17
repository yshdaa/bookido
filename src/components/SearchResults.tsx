import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

interface SearchResult {
  id: number;
  title: string;
  author: string;
  price: number;
}

interface SearchResultsProps {
  results: SearchResult[];
  onClose: () => void;
}

export default function SearchResults({ results, onClose }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 glass-effect rounded-lg shadow-2xl 
                    border border-gray-700/50 max-h-96 overflow-y-auto z-50">
      {results.map((book) => (
        <Link
          key={book.id}
          to={`/book/${book.id}`}
          onClick={onClose}
          className="flex items-center gap-4 p-4 hover:bg-gray-700/50 transition-colors"
        >
          <Book className="w-5 h-5 text-blue-400" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-200">{book.title}</h3>
            <p className="text-sm text-gray-400">{book.author}</p>
          </div>
          <span className="text-blue-400 font-semibold">${book.price.toFixed(2)}</span>
        </Link>
      ))}
    </div>
  );
}