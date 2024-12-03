import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../assets/navSlide-1.jpeg";
import slider2 from "../assets/navSlide-2.png";
import slider3 from "../assets/navSlider-3.jpeg";


const heroData = [
  {
    id: 1,
    heading: "Revitalize Hair Serum",
    benefits: [
      "Strengthens hair from roots to tips",
      "Reduces split ends by 80%",
      "Enhances natural shine",
    ],
    bgUrl: slider1,
  },
  {
    id: 2,
    heading: "Hydrating Hair Mask",
    benefits: [
      "Deeply moisturizes dry hair",
      "Restores hair elasticity",
      "Reduces frizz and tangles",
    ],
    bgUrl: slider2,
  },
  {
    id: 3,
    heading: "Volumizing Shampoo",
    benefits: [
      "Adds volume and body to thin hair",
      "Cleanses without stripping natural oils",
      "Infused with biotin for stronger hair",
    ],
    bgUrl: slider3,
  },
];

const HeroCarousel = () => {
  return (
    <div>

      

      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
        {heroData.map((item) => (
          <div
            key={item.id}
            className="relative h-[600px] bg-cover bg-center flex items-center px-6"
            style={{ backgroundImage: `url(${item.bgUrl})` }}
          >
            <div className="text-left max-w-md text-white mt-12 ml-12">
              <h2 className="text-4xl font-bold mb-4">{item.heading}</h2>
              <ul className="mb-4 space-y-2">
                {item.benefits.map((benefit, index) => (
                  <li key={index} className="text-lg">
                    • {benefit}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-amber-800 rounded-lg text-white  hover:bg-amber-700 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
