import React from "react";
import FooterBg from '../assets/footer-logo.svg'

const Footer = () => {
  return (
    <div>
      To use a background image in place of a background color, you can apply
      the style attribute or use Tailwind CSS classes. Here's how you can
      achieve it: Option 1: Using Tailwind CSS Classes Tailwind CSS provides
      utilities for setting background images. First, ensure your
      tailwind.config.js file allows custom images (if needed). Then, use
      bg-[url('path-to-your-image')] for the background image. jsx Copy code
      <footer className="bg-[url('/path-to-your-image.jpg')] bg-cover bg-center text-white py-10">
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about" className="font-sans">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
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




