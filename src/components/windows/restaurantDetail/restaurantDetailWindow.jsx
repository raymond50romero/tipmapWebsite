import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useMapState } from "../../../contexts/mapState.jsx";
import StarRating from "../../../features/posts/starRating.jsx";
import DollarRating from "../../../features/posts/dollarRating.jsx";
import "./styles.css";

export default function RestaurantDetailWindow() {
  const {
    isDetailWindowOpen,
    setIsDetailWindowOpen,
    selectedRestaurantData,
    currCenter,
    currZoom,
    northEast,
    southWest,
  } = useMapState();

  // If not open or no data, don't show
  if (!isDetailWindowOpen || !selectedRestaurantData) return null;

  const {
    averages,
    restaurant_name,
    restaurant_address,
    restaurant_place,
    mapbox_id,
    allPosts,
  } = selectedRestaurantData;

  const parts = restaurant_place.split(", ");
  parts.pop(); // removes the country from place
  const formattedPlace = parts.join(", ");

  const closeWindow = () => {
    setIsDetailWindowOpen(false);
    const blurBackground = document.getElementById("blur-background");
    if (blurBackground) {
      blurBackground.style.display = "none";
    }
  };

  return (
    <section className="window show-window" id="restaurant-detail-window">
      <div className="window-header">
        <h1 className="detail-name">{restaurant_name}</h1>
        <CloseOutlined className="close-btn" onClick={closeWindow} />
      </div>
      <div id="restaurant-detail-window-info">
        <div className="overall-rating-item">
          <StarRating rating={parseFloat(averages?.overall_average || 0)} />
        </div>
        <p className="detail-address">{restaurant_address}</p>
        <p className="detail-address">{formattedPlace}</p>
      </div>
      <div className="restaurant-detail-content">
        <div className="detail-ratings">
          <div className="ratings-grid">
            <div className="detail-rating-item">
              <span>Weekday Tips:</span>
              <DollarRating
                rating={parseFloat(averages?.weekday_tips_average || 0)}
              />
            </div>
            <div className="detail-rating-item">
              <span>Weekend Tips:</span>
              <DollarRating
                rating={parseFloat(averages?.weekend_tips_average || 0)}
              />
            </div>
            <div className="detail-rating-item">
              <span>Management:</span>
              <StarRating
                rating={parseFloat(averages?.management_average || 0)}
              />
            </div>
            <div className="detail-rating-item">
              <span>Environment:</span>
              <StarRating
                rating={parseFloat(averages?.work_environment_average || 0)}
              />
            </div>
            <div className="detail-rating-item">
              <span>Clientele:</span>
              <StarRating
                rating={parseFloat(averages?.clientele_average || 0)}
              />
            </div>
          </div>
        </div>

        <div className="detail-posts">
          <h2 className="detail-section-header">Reviews</h2>
          {allPosts && allPosts.length > 0 ? (
            allPosts.map((post, index) => (
              <div key={index} className="detail-post-tag">
                <h3 className="detail-post-title">{post.title}</h3>
                <p className="detail-post-comment">{post.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
