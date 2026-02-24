import { useState } from "react";
import PropTypes from "prop-types";

import StarRating from "../../features/posts/starRating.jsx";

import "./styles.css";

function RestaurantPopup({ name, address, onLeaveReview, onSeeReviews }) {
  const [rating, setRating] = useState(2.4);

  return (
    <div id="restaurant-popup-container">
      <h6 id="restaurant-popup-header">
        {name ? (address ? name + ", " + address : name) : " "}
      </h6>
      <section id="restaurant-popup-section-container">
        <StarRating rating={rating} id="restaurant-popup-star-rating" />
        <div id="restaurant-popup-button-container">
          <button
            id="restaurant-popup-leave-review-button"
            onClick={onLeaveReview}
          >
            Leave Review
          </button>
          <button
            id="restaurant-popup-see-review-button"
            onClick={onSeeReviews}
          >
            See Reviews
          </button>
        </div>
      </section>
    </div>
  );
}

RestaurantPopup.propTypes = {
  name: PropTypes.func,
  address: PropTypes.func,
  onLeaveReview: PropTypes.func,
  onSeeReviews: PropTypes.func,
};

export default RestaurantPopup;
