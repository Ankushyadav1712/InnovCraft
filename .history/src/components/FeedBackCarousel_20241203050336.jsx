import React from "react";
import Slider from "react-slick";
import FeedBack from "./FeedBack";

const reviewsData = [
  {
    key: 1,
    name: "Sarah Williams",
    review:
      "I've been using this hair oil for a month now, and my hair feels softer and healthier. It's definitely reduced the frizz, and I love the natural scent. Highly recommend!",
  },
  {
    key: 2,
    name: "John Smith",
    review:
      "This hair oil has completely transformed my dry, damaged hair. It nourishes deeply without feeling greasy, and my hair looks shinier and more manageable.",
  },
  {
    key: 3,
    name: "Emily Davis",
    review:
      "I was skeptical at first, but after a few uses, I can see a significant difference. My hair feels smoother, and it's growing faster. Definitely a game-changer.",
  },
  {
    key: 4,
    name: "Michael Brown",
    review:
      "Great product! It doesn't leave an oily residue and has helped with hair breakage. I've noticed less hair falling out, and my hair feels thicker.",
  },
  {
    key: 5,
    name: "Linda Garcia",
    review:
      "I love this hair oil! My hair feels more nourished, and it's much easier to style. Plus, it doesn't weigh my hair down, which is important for me.",
  },
  {
    key: 6,
    name: "Chris Johnson",
    review:
      "The best hair oil I've tried! It's helped with my scalp dryness and made my hair look healthier overall. It's now a staple in my hair care routine.",
  },
];

const FeedBackCarousel = () => {
  // Slick Carousel settings
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Show 3 cards at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden relative">
      <h2 >Our Customer Stories</h2>
      <Slider {...settings}>
        {reviewsData.map((review) => (
          <div key={review.key} className="px-2">
            <FeedBack review={review} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedBackCarousel;
