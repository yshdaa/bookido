import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 flex flex-col items-start justify-center">
        <div className="max-w-3xl space-y-6 animate-fade-in-up">
          {/* Title */}
          <h1 className="text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300 drop-shadow-lg">
            Discover Your Next
            <br />
            Great Read
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-blue-100/90 font-medium leading-relaxed">
            Dive into millions of books, from trending bestsellers to timeless classics.
            Connect with a community that shares your passion for reading.
          </p>
          
          {/* Call-to-Action Button */}
          <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 hover:from-teal-500 hover:to-blue-600 transition-transform duration-200 shadow-lg">
            Browse Collection
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-700 opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-64 h-64 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 opacity-20 blur-2xl"></div>
    </div>
  );
}
