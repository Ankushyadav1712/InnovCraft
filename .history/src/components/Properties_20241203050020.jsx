import React from "react";
import p1 from "../assets/Chemical-free.png";
import p2 from "../assets/Century-Old-Recipe.png";
import p3 from "../assets/Coldpress.png";
import p4 from "../assets/Cruelty-Free.png";
import p5 from "../assets/Handcrafted.png";
import p6 from "../assets/Herbal.png";

const Properties = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-semibold ">Crafted with love And care</h2>
        <p className="text-lg text-gray-500 mb-16 w-full text-center mt-4">
          We use materials that are organically grown and naturally sourced
          ingredients. All our products are tested to ensure they are safe and
          maintain the standard benchmark.
        </p>
      </div>
      <div className=" relative border-t-2 border-b-2 border-gray-200 py-8">
        <div className="flex  justify-between gap-2 mt-4 mb-4">
          {/* Image 1 */}
          <div className="flex justify-center items-center w-1/6 md:w-1/6">
            <img src={p5} alt="Chemical Free" className="max-w-full h-auto" />
            <p className="absolute bottom-[100px] text-amber-900 font-bold">
              Hand
            </p>
            <p className="absolute bottom-[80px] text-amber-900 font-bold">
              Crafted
            </p>
          </div>

          {/* Image 2 */}
          <div className="flex justify-center items-center w-1/6 md:w-1/6">
            <img
              src={p1}
              alt="Century Old Recipe"
              className="max-w-full h-auto"
            />
            <p className="absolute bottom-[100px] text-amber-900 font-bold">
              Chemical
            </p>
            <p className="absolute bottom-[80px]text-amber-900 font-bold">
              Free
            </p>
          </div>

          {/* Image 3 */}
          <div className="flex justify-center items-center w-1/6 md:w-1/6">
            <img src={p3} alt="Cold Press" className="max-w-full h-auto" />
            <p className="absolute bottom-[100px]">Hand</p>
            <p className="absolute bottom-[80px]">Crafted</p>
          </div>

          {/* Image 4 */}
          <div className="flex justify-center items-center w-1/6 md:w-1/6">
            <img src={p4} alt="Cruelty Free" className="max-w-full h-auto" />
            <p className="absolute bottom-[100px]">Hand</p>
            <p className="absolute bottom-[80px]">Crafted</p>
          </div>

          {/* Image 5 */}
          <div className="flex justify-center items-center w-1/6 md:w-1/6">
            <img src={p5} alt="Handcrafted" className="max-w-full h-auto" />
            <p className="absolute bottom-[100px]">Hand</p>
            <p className="absolute bottom-[80px]">Crafted</p>
          </div>

          {/* Image 6 */}
          <div className="flex justify-center items-center w-1/6 md:w-1/6">
            <img src={p6} alt="Herbal" className="max-w-full h-auto" />
            <p className="absolute bottom-[100px]">Hand</p>
            <p className="absolute bottom-[80px]">Crafted</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
