// pages/index.js
import React from 'react';
import Products from '../app/pages/components/Products'
const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Products</h1>
      <Products />
    </div>
  );
};

export default Home;
