// pages/index.js
import React from 'react';
import Products from '../components/Products';
import ShoppingCart from '../components/ShoppingCart';

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Products</h1>
      <Products />
      <ShoppingCart />
    </div>
  );
};

export default Home;
