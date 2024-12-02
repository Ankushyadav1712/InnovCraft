import React from "react";
import FooterBg from '../assets/footer-logo.svg'

const Footer = () => {
  return (
    <div>
      <footer className="bg-green-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          {/* Logo and Title */}
          <div className="mb-8">
            <img
              src={FooterBg} 
              alt="Abhyanjana Logo"
              className="mx-auto mb-4"
            />
          </div>

          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm sm:text-base">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="mb-8 flex justify-center space-x-6">
            <a
              href="#instagram"
              aria-label="Instagram"
              className="hover:text-gray-300"
            >
              <i className="fab fa-instagram text-xl sm:text-2xl"></i>
            </a>
            <a
              href="#facebook"
              aria-label="Facebook"
              className="hover:text-gray-300"
            >
              <i className="fab fa-facebook text-xl sm:text-2xl"></i>
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="hover:text-gray-300"
            >
              <i className="fab fa-youtube text-xl sm:text-2xl"></i>
            </a>
          </div>

          {/* Footer Links */}
          <div className="mb-4">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <li>
                <a href="#terms" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#return" className="hover:underline">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:underline">
                  Shipping & Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm">
            Copyright © 2024 Abhyanjana. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;




