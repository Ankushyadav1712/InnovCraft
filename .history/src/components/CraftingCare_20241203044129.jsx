import React from "react";
import crafting from "../assets/Crafting_img.png";

const CraftingCare = () => {
  return (
    <div className="px-6 py-12">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-center mb-8">
        Abhyanjana: Crafting Care
      </h2>

      {/* Image and Text Section */}
      <div className="flex items-center justify-between mb-12 rounded-full overflow-hidden bg-gray-100 shadow-lg h-[500px]">
        {/* Image Section */}
        <div className="w-1/2 h-full">
          <img
            src={crafting}
            alt="crafting"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text and Button Section */}
        <div className="w-1/2 p-6">
          <p className="text-lg text-gray-700 mb-6">
            Abhyanjana, emerged from a tradition of natural remedies, starting
            with a grandmother's handcrafted hair oil made from homegrown
            ingredients. This recipe was perfected by a devoted mother for her
            son's self-care needs. Each product of Abhyanjana is organically
            made and free from harmful chemicals, embodies love, tradition, and
            a nurturing spirit with organically sourced ingredients. Abhyanjana
            continues its legacy of high-quality, organic hair care rooted in
            love, tradition, and a nurturing spirit passed down through
            generations.
          </p>
          <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300">
            Know More
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4 ">
          Crafted with love And care
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We use materials that are organically grown and naturally sourced
          ingredients. All our products are tested to ensure they are safe and
          maintain the standard benchmark.
        </p>
      </div>
    </div>
  );
};

export default CraftingCare;
