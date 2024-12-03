import React, { useState } from "react";
import logo from "../assets/abhyanjana-logo.png";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
    </>
  );
};

export default NavBar;
