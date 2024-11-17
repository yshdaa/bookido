import React from 'react';
import Hero from '../components/Hero';
import BookCard from '../components/BookCard';
import { books } from '../data/books';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white-900">Featured Books</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="bg-blue-600 rounded-2xl overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-4">Join Our Book Club</h2>
                  <p className="text-blue-100 mb-6">
                    Get exclusive access to new releases, author interviews, and special discounts.
                    Plus, connect with fellow book lovers!
                  </p>
                  <div className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2 rounded-lg flex-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Book Club"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}