import React from 'react';

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 'mls88',
      name: 'Streamline Sports Leggings',
      size: 'S',
      quantity: 1,
      price: 55,
      img: 'https://images.macrumors.com/article-new/2023/09/iphone-15-pro-gray.jpg', 
    },
    {
      id: 'mls89',
      name: 'Sports Nike Shoes',
      size: 'S',
      quantity: 1,
      price: 55,
      img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e196cd9a-e12b-4529-8ba2-a0333c08befc/precision-6-basketball-shoes-l7zDFB.png', 
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold my-4">My Shopping Cart</h1>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="md:table-row absolute -top-full md:static block md:table-cell">
              <th className="block md:table-cell text-sm font-medium text-gray-700 p-4 bg-gray-100 border-b">Description</th>
              <th className="block md:table-cell text-sm font-medium text-gray-700 p-4 bg-gray-100 border-b">Size</th>
              <th className="block md:table-cell text-sm font-medium text-gray-700 p-4 bg-gray-100 border-b">Quantity</th>
              <th className="block md:table-cell text-sm font-medium text-gray-700 p-4 bg-gray-100 border-b">Remove</th>
              <th className="block md:table-cell text-sm font-medium text-gray-700 p-4 bg-gray-100 border-b">Price</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {cartItems.map((item) => (
              <tr key={item.id} className="md:table-row block border-b md:border-none">
                <td className="md:table-cell block md:border">
                  <div className="flex items-center">
                    <div className="w-20">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-700">Product Code: {item.id}</div>
                    </div>
                  </div>
                </td>
                <td className="md:table-cell block text-center md:border p-4">
                  <span className="text-sm">{item.size}</span>
                </td>
                <td className="md:table-cell block text-center md:border p-4">
                  <span className="text-sm">{item.quantity}</span>
                </td>
                <td className="md:table-cell block text-center md:border p-4">
                  <button className="text-sm text-white bg-red-500 hover:bg-red-600 p-1 rounded">x</button>
                </td>
                <td className="md:table-cell block text-center md:border p-4">
                  <span className="text-sm">£{item.price.toFixed(2)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 bg-gray-100">
          <div className="flex justify-between border-b">
            <div className="mb-2">
              <span className="text-sm">Discount</span>
              <span className="text-sm font-semibold tracking-wide ml-2">£0.00</span>
            </div>
            <div className="mb-2">
              <span className="text-sm">Delivery</span>
              <span className="text-sm font-semibold tracking-wide ml-2">£0.00</span>
            </div>
            <div className="mb-2">
              <span className="text-sm">Subtotal</span>
              <span className="text-sm font-semibold tracking-wide ml-2">£{calculateTotal()}</span>
            </div>
            <div className="mb-2">
              <span className="text-sm">Total</span>
              <span className="text-lg font-semibold tracking-wide ml-2">£{calculateTotal()}</span>
            </div>
          </div>
          <form className="my-4">
            <input
              type="text"
              placeholder="Please enter promo code"
              className="p-2 text-sm w-full border rounded"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Apply Discount
            </button>
          </form>
          <div className="flex space-x-2 text-sm font-medium">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Checkout</button>
            <button className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
