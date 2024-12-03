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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className=" relative  w-full bg-transparent z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold">
            <img src={logo} alt="logo" />
          </div>

          {/* Nav Sections and Bag Icon */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <a href="#about-us" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-gray-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-gray-300">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
            <div>
              <button className="relative  hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 hover:text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18M3 12h18m-6 9h6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18m-6 6h6"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a href="#about-us" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-gray-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-gray-300">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

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
