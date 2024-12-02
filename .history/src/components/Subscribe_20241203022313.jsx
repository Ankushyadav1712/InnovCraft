import React from "react";
import pic1 from "../assets/Subscribe-Pattern1.png";
import pic2 from "../assets/Subscribe-pattern2.png";

const Subscribe = () => {
  return (
    <div>
      <section className="relative bg-cream text-center py-10 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Subscription Content */}
        <div
          className="relative z-10 bg-yellow-50  rounded-lg shadow-lg px-6 py-10 overflow-hidden"
          style={{
            backgroundImage: `url(${pic1}), url(${pic2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left, bottom right",
            backgroundSize: "200px, 200px",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-800">
            Subscribe & Get 10% Off
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
            Be updated on new arrivals, trends, and offers. Subscribe now!
          </p>

          {/* Subscription Form */}
          <form className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-2/3 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
