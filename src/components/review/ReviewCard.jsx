// src/components/ReviewCard.jsx

import React from "react";


const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold text-lg">{review.name}</p>
          <p className="text-gray-600">Total Spend: <span className="font-bold">${review.spend}</span></p>
          <p className="text-gray-600">Total Review: {review.totalReviews}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <div className="flex items-center text-yellow-400 mr-2">
          {'⭐'.repeat(review.rating)}
        </div>
        <span className="text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-700 mb-4">{review.comment}</p>
      <div className="flex space-x-3">
        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200">
          Public Comment
        </button>
        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200">
          Direct Message
        </button>
        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200">
          💙
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;