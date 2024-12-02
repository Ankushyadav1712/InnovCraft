import React from "react";

const People = ({ person }) => {
  const handlePlayButtonClick = (youtubeLink) => {
    window.location.href = youtubeLink;
  };

  return (
    <div
      key={person.key}
      className="relative w-40 h-40 rounded-lg overflow-hidden shadow-lg"
    >
      <img
        className="w-full h-full object-cover"
        src={person.imgUrl}
        alt={person.name}
      />
      <div className="absolute bottom-3 left-3 text-white font-bold text-lg z-10">
        {person.name}
      </div>
      <button
        onClick={() => handlePlayButtonClick(person.youtubeLink)}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center z-20 hover:bg-opacity-75"
      >
        ▶️
      </button>
    </div>
  );
};

export default People;
