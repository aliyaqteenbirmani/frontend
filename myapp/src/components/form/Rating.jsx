import React, { useState } from "react";
import { Star } from "lucide-react";

const Rating = () => {
  const [rating, setRating] = useState(0); // Current rating
  const [hoverRating, setHoverRating] = useState(0); // Hovered rating

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
  };

  return (
    <div className="flex flex-row items-center space-x-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          size={32}
          className={`cursor-pointer transition-transform duration-200 ${
  hoverRating >= index || rating >= index ? "text-yellow-500" : "text-gray-300"
} ${hoverRating === index ? "scale-110" : "scale-100"}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          fill={rating >= index ? "#FACC15" : "none"} // Ensures color changes when clicked
          stroke={rating >= index ? "#FACC15" : "currentColor"} // Matches the stroke color
        />
      ))}
      <p className="ml-4 text-lg font-medium">
        {rating > 0 ? `${rating} star${rating > 1 ? "s" : ""}` : "Rate this!"}
      </p>
    </div>
  );
};

export default Rating;
