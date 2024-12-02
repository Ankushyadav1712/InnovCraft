import React from 'react'
import follow1 from '../assets/Follow-1.webp'
import follow2 from '../assets/Follow-2.webp'
imp

const FollowUs = () => {
  return (
    <div>
      <div className="p-6 text-center min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Follow Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Replace "photo1.jpg" and "photo2.jpg" with actual paths to your photos */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src="photo1.jpg"
              alt="Photo 1"
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src="photo2.jpg"
              alt="Photo 2"
              className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUs