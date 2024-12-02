import React from "react";

const FeedBack = ({ review }) => {
  return (
    <div
      key={review.key}
      className="bg-yellow-100 p-6 mb-4 rounded-lg w-[300px] h-[200px] max-w-md mx-auto"
    >
      {/* Review text */}
      <p className="text-gray-800 text-lg mb-4">{review.review}</p>

      {/* Name */}
      <p className="text-gray-600 text-sm text-right">- {review.name}</p>
    </div>
  );
};

export default FeedBack;
