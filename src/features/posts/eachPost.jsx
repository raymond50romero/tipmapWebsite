import PropTypes from "prop-types";
import StarRating from "./starRating.jsx";
import DollarRating from "./dollarRating.jsx";

import "./styles.css";

export default function EachPost({ post }) {
  if (!post) return null;

  return (
    <div className="each-post-container">
      <h6 className="each-post-header">{post.restaurant_name}</h6>
      <p className="each-post-title">{post.title}</p>
      <div className="ratings-group">
        <div className="each-post-rating">
          <span className="rating-label">Clientele:</span>
          <StarRating rating={post.clientele} />
        </div>
        <div className="each-post-rating">
          <span className="rating-label">Weekday Tips:</span>
          <DollarRating rating={post.weekday_tips} />
        </div>
        <div className="each-post-rating">
          <span className="rating-label">Weekend Tips:</span>
          <DollarRating rating={post.weekend_tips} />
        </div>
      </div>

      <p className="each-post-comment">{post.comment}</p>
    </div>
  );
}

EachPost.propTypes = {
  post: PropTypes.shape({
    restaurant_name: PropTypes.string.isRequired,
    title: PropTypes.string,
    clientele: PropTypes.number.isRequired,
    weekday_tips: PropTypes.number.isRequired,
    weekend_tips: PropTypes.number.isRequired,
    comment: PropTypes.string,
  }).isRequired,
};
