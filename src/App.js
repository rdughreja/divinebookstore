import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import Stationery from './pages/Stationery';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import ClassBooks from './pages/ClassBooks';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/books/class/:classNum" element={<ClassBooks />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

