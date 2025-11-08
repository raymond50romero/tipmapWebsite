import StarRating from "./starRating.jsx";

import "./styles.css";

export default function EachPost() {
  return (
    <div className="each-post-container">
      <h6 className="each-post-header">Title</h6>
      <div>
        <StarRating />
      </div>
    </div>
  );
}
