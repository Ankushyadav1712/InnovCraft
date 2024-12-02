import React from "react";
import p1 from "../assets/Chemical-free.png";
import p2 from "../assets/Century-Old-Recipe.png";
import p3 from "../assets/Coldpress.png";
import p4 from "../assets/Cruelty-Free.png";
import p5 from "../assets/Handcrafted.png";
import p6 from "../assets/Herbal.png";

const Properties = () => {
  return (
    <div className="border-t-2 border-b-2 border-gray-200 py-8">
      <div className="flex  justify-between gap-2">
        {/* Image 1 */}
        <div className="flex justify-center items-center w-1/6 md:w-1/6">
          <img src={p1} alt="Chemical Free" className="max-w-full h-auto" />
        </div>

        {/* Image 2 */}
        <div className="flex justify-center items-center w-1/6 md:w-1/6">
          <img
            src={p2}
            alt="Century Old Recipe"
            className="max-w-full h-auto"
          />
          
        </div>

        {/* Image 3 */}
        <div className="flex justify-center items-center w-1/6 md:w-1/6">
          <img src={p3} alt="Cold Press" className="max-w-full h-auto" />
        </div>

        {/* Image 4 */}
        <div className="flex justify-center items-center w-1/6 md:w-1/6">
          <img src={p4} alt="Cruelty Free" className="max-w-full h-auto" />
        </div>

        {/* Image 5 */}
        <div className="flex justify-center items-center w-1/6 md:w-1/6">
          <img src={p5} alt="Handcrafted" className="max-w-full h-auto" />
        </div>

        {/* Image 6 */}
        <div className="flex justify-center items-center w-1/6 md:w-1/6">
          <img src={p6} alt="Herbal" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Properties;
