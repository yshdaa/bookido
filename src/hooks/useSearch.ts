import { useState, useEffect } from 'react';
import { books } from '../data/books';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  rating: number;
  description: string;
}

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Book[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults = books.filter((book) => {
      const searchTerm = query.toLowerCase();
      return (
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm)
      );
    });

    setResults(searchResults);
  }, [query]);

  return { query, setQuery, results };
}