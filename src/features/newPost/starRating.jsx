import React, { useState } from "react";

export default function StarRating({ max = 5, onChange }) {
  const [rating, setRating] = useState(0); // final selected rating
  const [hover, setHover] = useState(0); // hover preview rating

  const handleClick = (value) => {
    setRating(value);
    onChange?.(value); // pass value back to parent if needed
  };

  return (
    <div style={{ display: "flex", cursor: "pointer", gap: 5 }}>
      {Array.from({ length: max }, (_, i) => {
        const value = i + 1;
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={value <= (hover || rating) ? "#FBBF24" : "#E5E7EB"}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleClick(value)}
            width="30"
            height="30"
            style={{ transition: "fill 0.2s" }}
          >
            <path d="M12 2l2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 17.8l-5.8 3 1.1-6.6-4.8-4.7 6.6-.9z" />
          </svg>
        );
      })}
    </div>
  );
}
