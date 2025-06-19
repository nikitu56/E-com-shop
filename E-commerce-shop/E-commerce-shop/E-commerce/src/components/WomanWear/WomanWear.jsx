// eslint-disable-next-line no-unused-vars
import React from "react";

const womensWearProducts = [
  {
    id: 1,
    name: "summer T-Shirt",
    price: 599,
    image: "src/assets/womanwear/1.jpg",
  },
  {
    id: 2,
    name: "casual T-shirt",
    price: 499,
    image: "src/assets/womanwear/2.jpg",
  },
  {
    id: 3,
    name: "Denim T-Shirt",
    price: 899,
    image: "src/assets/womanwear/3.jpg",
  },
  {
    id: 4,
    name: "Casual Shirt",
    price: 799,
    image: "src/assets/womanwear/4.jpg",
  },
  {
    id: 5,
    name: "Shirt",
    price: 299,
    image: "src/assets/womanwear/5.jpg",
  },
  {
    id: 6,
    name: "Maxi Skirt",
    price: 799,
    image: "src/assets/womanwear/6.jpg",
  },
];

const WomensWear = () => {
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
    // Replace alert with your cart logic as needed
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Womens Wear</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {womensWearProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-sm p-3 text-center hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-70 h-50 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-auto bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomensWear;
