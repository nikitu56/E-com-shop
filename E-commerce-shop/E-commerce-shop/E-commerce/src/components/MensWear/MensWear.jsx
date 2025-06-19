// eslint-disable-next-line no-unused-vars
import React from "react";

const mensWearProducts = [
  {
    id: 1,
    name: "Classic Denim Shirt",
    price: 999,
    image: "src/assets/MensWear/image.png",
  },
  {
    id: 2,
    name: "Formal Shirt",
    price: 499,
    image: "src/assets/MensWear/Shirt 1 - Copy.jpg",
  },
  {
    id: 3,
    name: "Shirt",
    price: 799,
    image: "src/assets/MensWear/Shirt 2 - Copy.jpg",
  },
  {
    id: 4,
    name: "Slim  Shirt",
    price: 799,
    image: "src/assets/MensWear/Shirt 3.jpg",
  },
  {
    id: 5,
    name: "Slim T-shirt",
    price: 199,
    image: "src/assets/MensWear/T-Shirt 1 - Copy.jpg",
  },
  {
    id: 6,  // fixed duplicate id
    name: "Slim T-shirt",
    price: 99,
    image: "src/assets/MensWear/T-Shirt 2 - Copy.jpg",
  },
];

const MensWear = () => {
  // Example handler when Add to Cart button clicked
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
    // You can replace alert with your actual cart logic
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mens Wear</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mensWearProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-56 h-70 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensWear;

