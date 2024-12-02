import React from "react";

const Product = ({ product }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-4 max-w-sm">
      {/* Sale Badge */}
      {product.onSale && (
        <span className="absolute top-2 left-2 bg-white text-green-900 text-xs font-bold px-2 py-1 rounded">
          Sale
        </span>
      )}

      {/* Product Image */}
      <img
        src={product.imgUrl}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Title and Oil Content */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        {/* <span className="text-sm text-gray-500">({product.oilContent}ml)</span> */}
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${
              index < Math.round(product.rating)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.362 2.44a1 1 0 00-.364 1.118l1.286 3.948c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.362 2.44c-.784.57-1.839-.197-1.54-1.118l1.286-3.948a1 1 0 00-.364-1.118L2.658 7.375c-.783-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.948z" />
          </svg>
        ))}
      </div>

      {/* Pricing */}
      <div className="mb-4">
        {product.onSale ? (
          <div>
            <span className="text-gray-500 line-through mr-2">
              ${product.oldPrice.toFixed(2)}
            </span>
            <span className="text-green-600 font-bold">
              ${product.newPrice.toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="text-black font-bold">
            ${product.newPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
