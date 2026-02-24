import { useState } from "react";
import StarRating from "./starRating.jsx";

import "./styles.css";

export default function EachPost() {
  const [rating, setRating] = useState(2.4);

  return (
    <div className="each-post-container">
      <h6 className="each-post-header">Title</h6>
      <div>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}
