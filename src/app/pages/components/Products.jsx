// components/Products.js
import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$10', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$20', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$30', imageUrl: 'https://via.placeholder.com/150' },
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded shadow p-4">
          <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover mb-4" />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-500">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
