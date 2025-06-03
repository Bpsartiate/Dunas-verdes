import React from "react";

const VillaCard = ({ title, image, description, price }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-green-500">${price} / night</span>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillaCard;