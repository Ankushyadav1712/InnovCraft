import React from "react";
import Product from "./Product";
import pro1 from "../assets/product1.jpeg";
import pro2 from "../assets/Product-2.jpeg";
import pro3 from "../assets/Product-3.jpeg";
import pro4 from "../assets/Product-4.jpeg";

const productData = [
  {
    key: 1,
    title: "Nourishing Argan Hair Oil - 200ml",
    oilContent: 200,
    onSale: true,
    imgUrl: pro1,
    rating: 4.8,
    oldPrice: 699.00,
    newPrice: 599.00,
  },
  {
    key: 3,
    title: "Anti-Dandruff Tea Tree Oil - 100ml",
    oilContent: 100,
    onSale: true,
    imgUrl: pro2,
    rating: 4.5,
    oldPrice: ,
    newPrice: 13.99,
  },
  {
    key: 2,
    title: "Herbal Coconut Hair Oil - 150ml",
    oilContent: 150,
    onSale: false,
    imgUrl: pro3,
    rating: 4.6,
    newPrice: 15.49,
  },
  {
    key: 5,
    title: "Strengthening Castor Hair Oil - 300ml",
    oilContent: 300,
    onSale: true,
    imgUrl: pro4,
    rating: 4.9,
    oldPrice: 30.99,
    newPrice: 24.99,
  },
];

const Products = () => {
  return (
    <div className="p-8">
      {/* Title */}
      <h2 className="text-4xl  text-center mb-8 text-green-900">Our Products</h2>

      {/* Products Grid */}
      <div className="flex flex-wrap gap-10 justify-center">
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
