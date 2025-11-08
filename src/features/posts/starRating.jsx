import React, { useState } from "react";

import "./styles.css";

export default function StarRating() {
  const [rating, setRating] = useState(2.4); // final selected rating

  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {Array.from({ length: 5 }, (_, i) => {
        const value = i + 1;
        const fillPercentage =
          Math.min(Math.max(rating - (value - 1), 0), 1) * 100;
        return (
          <svg
            className="stars"
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={value <= rating ? "#fbbf24" : "#ccc"}
          >
            <defs>
              <linearGradient id={`grad-${i}`}>
                <stop offset={`${fillPercentage}%`} stopColor="#fbbf24" />
                <stop offset={`${fillPercentage}%`} stopColor="#ccc" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 17.8l-5.8 3 1.1-6.6-4.8-4.7 6.6-.9z"
              fill={`url(#grad-${i})`}
            />
          </svg>
        );
      })}
    </div>
  );
}
