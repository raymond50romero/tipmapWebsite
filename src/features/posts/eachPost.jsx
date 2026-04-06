import PropTypes from "prop-types";
import { useMapState } from "../../contexts/mapState.jsx";
import StarRating from "./starRating.jsx";
import DollarRating from "./dollarRating.jsx";

import "./styles.css";

export default function EachPost({ post, currentCategory }) {
  const { setIsDetailWindowOpen, setSelectedRestaurantData } = useMapState();

  if (!post) return null;

  const handleClick = () => {
    setSelectedRestaurantData(post);
    setIsDetailWindowOpen(true);
    // Show blur background
    const blurBackground = document.getElementById("blur-background");
    if (blurBackground) {
      blurBackground.style.display = "block";
    }
  };

  const renderRating = (category) => {
    const value = post.averages?.[category] || 0;

    switch (category) {
      case "weekday_tips_average":
        return (
          <div className="each-post-rating" key={category}>
            <span className="rating-label">Weekday Tips:</span>
            <DollarRating rating={parseFloat(value)} />
          </div>
        );
      case "weekend_tips_average":
        return (
          <div className="each-post-rating" key={category}>
            <span className="rating-label">Weekend Tips:</span>
            <DollarRating rating={parseFloat(value)} />
          </div>
        );
      case "management_average":
        return (
          <div className="each-post-rating" key={category}>
            <span className="rating-label">Management:</span>
            <StarRating rating={parseFloat(value)} />
          </div>
        );
      case "work_environment_average":
        return (
          <div className="each-post-rating" key={category}>
            <span className="rating-label">Environment:</span>
            <StarRating rating={parseFloat(value)} />
          </div>
        );
      case "clientele_average":
        return (
          <div className="each-post-rating" key={category}>
            <span className="rating-label">Clientele:</span>
            <StarRating rating={parseFloat(value)} />
          </div>
        );
      case "overall_average":
      default:
        return (
          <div className="each-post-rating" key="overall_average">
            <span className="rating-label">Overall:</span>
            <StarRating rating={parseFloat(value)} />
          </div>
        );
    }
  };

  // Logic to show exactly 3 ratings (or 2 if tips are filtered)
  const getOrderedCategories = () => {
    const isTipCategory =
      currentCategory === "weekday_tips_average" ||
      currentCategory === "weekend_tips_average";

    if (isTipCategory) {
      // If a tip category is chosen, only show the 2 tips in order
      const otherTip =
        currentCategory === "weekday_tips_average"
          ? "weekend_tips_average"
          : "weekday_tips_average";
      return [currentCategory, otherTip];
    }

    // Otherwise, show the selected category FIRST, then ALWAYS weekday and weekend tips at the bottom
    return [currentCategory, "weekday_tips_average", "weekend_tips_average"];
  };

  return (
    <div
      className="each-post-container"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <h6 className="each-post-header">{post.restaurant_name}</h6>

      <div className="ratings-group">
        {getOrderedCategories().map((cat) => renderRating(cat))}
      </div>
    </div>
  );
}

EachPost.propTypes = {
  post: PropTypes.shape({
    restaurant_name: PropTypes.string.isRequired,
    title: PropTypes.string,
    comment: PropTypes.string,
    averages: PropTypes.object,
  }).isRequired,
  currentCategory: PropTypes.string.isRequired,
};
