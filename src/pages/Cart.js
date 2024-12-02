import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for cart items
const initialCartItems = [
  { id: 1, title: 'The Great Gatsby', price: 1299, quantity: 1, image: '/placeholder.svg' },
  { id: 2, title: 'To Kill a Mockingbird', price: 1499, quantity: 2, image: '/placeholder.svg' },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">rs.{item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-20 mr-4 p-1 border rounded"
                    />
                    <button onClick={() => removeItem(item.id)} className="text-red-600">Remove</button>
                  </div>
                </div>
                <p className="font-semibold">rs.{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>rs.{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>rs.{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 font-bold">
                <span>Total</span>
                <span>rs.{total.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

