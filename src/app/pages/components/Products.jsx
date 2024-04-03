// components/Products.js
import React from 'react';

const products = [
  { id: 1, name: 'iPhone 13', price: '$999', imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631657387000' },
  { id: 2, name: 'Samsung Galaxy S21', price: '$799', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yQ2mfJjsWiE-t2FITwtkkUPcQOZuzQ0vCME-eWbRJA&s' },
  { id: 3, name: 'Google Pixel 6', price: '$699', imageUrl: 'https://www.cnet.com/a/img/resize/8cc6c41edda61b06fd967d1ddcfa89de09ebebab/hub/2022/10/11/126d74fb-ec7c-488f-befd-2cef694b2b65/pixel-7-pro-watch-lanxon-promo-27.jpg?auto=webp&fit=crop&height=576&width=768' },
  { id: 1, name: 'iPhone 13', price: '$999', imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631657387000' },
  { id: 2, name: 'Samsung Galaxy S21', price: '$799', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yQ2mfJjsWiE-t2FITwtkkUPcQOZuzQ0vCME-eWbRJA&s' },
  { id: 3, name: 'Google Pixel 6', price: '$699', imageUrl: 'https://www.cnet.com/a/img/resize/8cc6c41edda61b06fd967d1ddcfa89de09ebebab/hub/2022/10/11/126d74fb-ec7c-488f-befd-2cef694b2b65/pixel-7-pro-watch-lanxon-promo-27.jpg?auto=webp&fit=crop&height=576&width=768' },
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded shadow p-4">
          <img src={product.imageUrl} alt={product.name} className="w-full h-90 object-cover mb-4" />
          <h3 className="text-gray-500 font-semibold">{product.name}</h3>
          <p className="text-gray-500">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
