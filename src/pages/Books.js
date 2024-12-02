import React from 'react';
import { Link } from 'react-router-dom';

// Mock data for books
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 1299, image: '/placeholder.svg' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 1499, image: '/placeholder.svg' },
  { id: 3, title: '1984', author: 'George Orwell', price: 1199, image: '/placeholder.svg' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 999, image: '/placeholder.svg' },
];

function Books() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">rs.{book.price.toFixed(2)}</span>
                <Link to={`/books/${book.id}`} className="text-blue-600 hover:text-blue-800">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;

