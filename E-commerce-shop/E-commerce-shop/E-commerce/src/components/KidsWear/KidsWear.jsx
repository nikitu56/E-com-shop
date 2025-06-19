/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const kidsProducts = [
  {
    id: 1,
    name: "Classic Denim Shart",
    price: 299,
    image: "/src/assets/kidswear/1.jpg",
  },
  {
    id: 2,
    name: "Formal Shirt",
    price: 149,
    image: "src/assets/kidswear/2.jpg",
  },
  {
    id: 3,
    name: " Shirt",
    price: 179,
    image: "src/assets/kidswear/3.jpg",
  },
  {
    id: 4,
    name: "Slim Fit ",
    price: 179,
    image: "src/assets/kidswear/4.jpg",
  },
  {
    id: 5,
    name: "Slim ",
    price: 179,
    image: "src/assets/kidswear/5.jpg",
  },
  {
    id: 6,
    name: "Slim",
    price: 179,
    image: "src/assets/kidswear/6.jpg",
  },
  {
    id: 7,
    name: "Slim Fit",
    price: 179,
    image: "src/assets/kidswear/7.jpg",
  },
];

const KidsWear = ({ onAddToCart }) => {
  // Keep track of loading states for products by their id
  const [loadingIds, setLoadingIds] = useState([]);

  const handleAddToCart = (product) => {
    if (!onAddToCart) return;

    setLoadingIds(prev => [...prev, product.id]);

    // Simulate async add to cart action or call real one
    Promise.resolve(onAddToCart(product))
      .finally(() => {
        setLoadingIds(prev => prev.filter(id => id !== product.id));
      });
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-6">Kids Wear</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {kidsProducts.map(product => {
          const isLoading = loadingIds.includes(product.id);

          return (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm p-3 text-center hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-green-600 font-semibold mb-3">₹{product.price}</p>
              <button
                className={`px-4 py-2 rounded text-white transition ${
                  isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
                onClick={() => handleAddToCart(product)}
                disabled={isLoading}
              >
                {isLoading ? (
                  // Simple spinner indicator using SVG
                  <svg
                    className="animate-spin h-5 w-5 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KidsWear;


