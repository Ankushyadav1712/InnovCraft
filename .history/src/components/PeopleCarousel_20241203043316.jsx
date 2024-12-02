import React from "react";
import Slider from "react-slick";
import People from "./People";
import frame1 from '../assets/Frame-3895-1.png'
import frame2 from '../assets/Frame-3896.png'
import frame3 from '../assets/Frame-3897-1.png'
import frame4 from '../assets/Frame-3898-1.png'


// Dummy data
const peopleData = [
  {
    key: 1,
    name: "",
    imgUrl: frame1, // Placeholder image URL
    youtubeLink: "https://www.youtube.com/channel/UC123456789", // Example link
  },
  {
    key: 2,
    name: "",
    imgUrl: frame2,
    youtubeLink: "https://www.youtube.com/channel/UC987654321",
  },
  {
    key: 3,
    name: "",
    imgUrl: frame3,
    youtubeLink: "https://www.youtube.com/channel/UC543216789",
  },
  {
    key: 4,
    name: "",
    imgUrl: frame4,
    youtubeLink: "https://www.youtube.com/channel/UC192837465",
  },
  {
    key: 5,
    name: "",
    imgUrl: "https://via.placeholder.com/150",
    youtubeLink: "https://www.youtube.com/channel/UC543216789",
  },
  {
    key: 6,
    name: "",
    imgUrl: "https://via.placeholder.com/150",
    youtubeLink: "https://www.youtube.com/channel/UC192837465",
  },
];

const PeopleCarousel = () => {
  // Slick Carousel settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Change this based on how many you want visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 slides for medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // 1 slide for small screens
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="text-4xl  text-center mb-8 text-green-900">
        Real People Real Stories
      </h2>
      <div className="">
        <Slider {...settings}>
          {peopleData.map((person) => (
            <div key={person.key} className="p-4">
              <People person={person} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PeopleCarousel;
