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
    </div>
  );
}

export default FollowUs