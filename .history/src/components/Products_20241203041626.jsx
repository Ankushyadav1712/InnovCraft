import React from "react";
import Product from "./Product";
import pro1 from "../assets/product1.jpeg";
import pro2 from "../assets/Product-2.jpeg";
import pro3 from "../assets/Product-3.jpeg";
import pro4 from "../assets/Product-4.jpeg";

const productData = [
  {
    key: 1,
    title: "Samasti Hair Oil ‐ Natural hair oil for hair growth (100ML)",
    oilContent: 200,
    onSale: true,
    imgUrl: pro1,
    rating: 4.8,
    oldPrice: 699.0,
    newPrice: 599.0,
  },
  {
    key: 3,
    title: "Abhyanjana Haircare Kit – Best hair care kit for Hair Growth",
    oilContent: 100,
    onSale: true,
    imgUrl: pro2,
    rating: 4.5,
    oldPrice: 898.0,
    newPrice: 699.0,
  },
  {
    key: 2,
    title: "Ukti – Natural Hair Scrub (100 g)",
    oilContent: 150,
    onSale: false,
    imgUrl: pro3,
    rating: 4.6,
    newPrice: 199,
  },
  {
    key: 4,
    title: "Samasti Hair Oil Pack of 2 (100ml)",
    oilContent: 300,
    onSale: true,
    imgUrl: pro4,
    rating: 4.9,
    oldPrice: 1597.0,
    newPrice: 1099,
  },
];

const Products = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl  text-center mb-8 text-green-900">Our Products</h2>

      {/* Products Grid */}
      <div className="flex flex-nowrap gap-10 justify-center">
        {productData.map((item) => (
          <div className="">
            <Product key={item.key} product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
