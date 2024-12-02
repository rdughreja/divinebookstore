import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/solid';

// Mock data for a book
const book = {
  id: 1,
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  price: 12.99,
  image: '/placeholder.svg',
  description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
  stock: 10,
  rating: 4.5,
  reviews: 128
};

function BookDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log(`Added ${quantity} of book ID ${id} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-full">
          <img src={book.image} alt={book.title} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`h-5 w-5 ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-gray-600">({book.reviews} reviews)</span>
          </div>
          <p className="text-2xl font-bold mb-4">${book.price.toFixed(2)}</p>
          <p className="mb-6">{book.description}</p>
          <div className="flex items-center mb-4">
            <input
              type="number"
              min="1"
              max={book.stock}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 mr-4 p-2 border rounded"
            />
            <button
              onClick={handleAddToCart}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              <ShoppingCartIcon className="h-5 w-5 mr-2" /> Add to Cart
            </button>
          </div>
          <p className="text-sm text-gray-600">{book.stock} in stock</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;

