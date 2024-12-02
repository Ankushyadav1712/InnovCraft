import React from 'react'
import follow1 from '../assets/Follow-1.webp'
import follow2 from '../assets/Follow-2.webp'
import follow3 from '../assets/Follow-3.webp'
import follow4 from '../assets/Follow-4.webp'

const FollowUs = () => {
  return (
    <div>
      <div className="p-6 text-center min-h-screen">
        <h1 className="text-4xl  text-gray-800 mb-10">Follow Us</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {/* Replace "photo1.jpg" and "photo2.jpg" with actual paths to your photos */}
          <div className="overflow-hidden  shadow-md">
            <img
              src={follow1}
              alt="Photo 1"
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden shadow-md">
            <img
              src={follow2}
              alt="Photo 2"
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden  shadow-md">
            <img
              src={follow3}
              alt="Photo 1"
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden  shadow-md">
            <img
              src={follow4}
              alt="Photo 1"
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden  shadow-md">
            <img
              src={follow2}
              alt="Photo 1"
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden  shadow-md">
            <img
              src={follow1}
              alt="Photo 1"
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden  shadow-md">
            <img
              src={follow3}
              alt="Photo 1"
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden  shadow-md">
            <img
              src={follow1}
              alt="Photo 1"
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
        {/* Load More Button */}
        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          Load More
        </button>

        {/* Instagram Follow Button */}
        <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">
          <i className="fab fa-instagram text-xl sm:text-2xl mr-2"></i>
          Follow on Instagram
        </button>
      </div>
    </div>
  );
}

export default FollowUs