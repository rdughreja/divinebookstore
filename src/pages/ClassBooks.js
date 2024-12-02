import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data for class-wise books
const classBooks = {
  1: [
    { id: 1, title: 'Math for Class 1', price: 9.99, image: '/placeholder.svg' },
    { id: 2, title: 'English for Class 1', price: 8.99, image: '/placeholder.svg' },
  ],
  2: [
    { id: 3, title: 'Math for Class 2', price: 10.99, image: '/placeholder.svg' },
    { id: 4, title: 'English for Class 2', price: 9.99, image: '/placeholder.svg' },
  ],
  // Add more classes and books as needed
};

function ClassBooks() {
  const { classNum } = useParams();
  const books = classBooks[classNum] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Books for Class {classNum}</h1>
      {books.length === 0 ? (
        <p>No books found for this class.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{book.title}</h2>
                <div className="flex justify-between items-center">
                  <span className="font-bold">${book.price.toFixed(2)}</span>
                  <Link to={`/books/${book.id}`} className="text-blue-600 hover:text-blue-800">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClassBooks;

