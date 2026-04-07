import React, { useState } from "react";
import { CloseOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useMapState } from "../../../contexts/mapState.jsx";
import StarRating from "../../../features/posts/starRating.jsx";
import DollarRating from "../../../features/posts/dollarRating.jsx";
import "./styles.css";

export default function RestaurantDetailWindow() {
  const {
    isDetailWindowOpen,
    setIsDetailWindowOpen,
    isAllReviewsWindowOpen,
    setIsAllReviewsWindowOpen,
    selectedRestaurantData,
    currCenter,
    currZoom,
    northEast,
    southWest,
  } = useMapState();

  const [showRatings, setShowRatings] = useState(false);

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

  const displayPosts = allPosts?.slice(0, 3) || [];

  console.log("this is all posts: ", allPosts);

  const tipsAverage =
    (parseFloat(averages?.weekday_tips_average || 0) +
      parseFloat(averages?.weekend_tips_average || 0)) /
    2;

  const parts = restaurant_place.split(", ");
  parts.pop(); // removes the country from place
  const formattedPlace = parts.join(", ");

  const closeWindow = () => {
    setIsDetailWindowOpen(false);
    setIsAllReviewsWindowOpen(false);
    const blurBackground = document.getElementById("blur-background");
    if (blurBackground) {
      blurBackground.style.display = "none";
    }
  };

  const openAllReviews = () => {
    setIsAllReviewsWindowOpen(true);
  };

  return (
    <section
      className={`window show-window ${isAllReviewsWindowOpen ? "shifted-left" : ""}`}
      id="restaurant-detail-window"
    >
      <div className="window-header">
        <h1 className="detail-name">{restaurant_name}</h1>
        <CloseOutlined className="close-btn" onClick={closeWindow} />
      </div>
      <div id="restaurant-detail-window-info">
        <div className="header-ratings">
          <Tooltip
            title={`Overall: ${parseFloat(
              averages?.overall_average || 0,
            ).toFixed(1)}`}
          >
            <div>
              <StarRating rating={parseFloat(averages?.overall_average || 0)} />
            </div>
          </Tooltip>
          <Tooltip title={`Tips: ${tipsAverage.toFixed(1)}`}>
            <div>
              <DollarRating rating={tipsAverage} />
            </div>
          </Tooltip>
        </div>
        <p className="detail-address">{restaurant_address}</p>
        <p className="detail-address">{formattedPlace}</p>
      </div>
      <div className="restaurant-detail-content">
        <div className="ratings-dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setShowRatings(!showRatings)}
          >
            <span>Ratings</span>
            {showRatings ? <UpOutlined /> : <DownOutlined />}
          </button>

          {showRatings && (
            <div className="detail-ratings">
              <Tooltip
                title={`Overall: ${parseFloat(
                  averages?.overall_average || 0,
                ).toFixed(1)}`}
              >
                <div className="overall-rating-item">
                  <span className="detail-rating-item-label">Overall:</span>
                  <div className="overall-rating-values">
                    <div>
                      <StarRating
                        rating={parseFloat(averages?.overall_average || 0)}
                      />
                    </div>
                  </div>
                </div>
              </Tooltip>
              <div className="ratings-grid">
                <Tooltip
                  title={`Weekday Tips: ${parseFloat(
                    averages?.weekday_tips_average || 0,
                  ).toFixed(1)}`}
                >
                  <div className="detail-rating-item tips-rating-item">
                    <span>Weekday Tips:</span>
                    <div>
                      <DollarRating
                        rating={parseFloat(averages?.weekday_tips_average || 0)}
                      />
                    </div>
                  </div>
                </Tooltip>
                <Tooltip
                  title={`Weekend Tips: ${parseFloat(
                    averages?.weekend_tips_average || 0,
                  ).toFixed(1)}`}
                >
                  <div className="detail-rating-item tips-rating-item">
                    <span>Weekend Tips:</span>
                    <div>
                      <DollarRating
                        rating={parseFloat(averages?.weekend_tips_average || 0)}
                      />
                    </div>
                  </div>
                </Tooltip>
                <Tooltip
                  title={`Management: ${parseFloat(
                    averages?.management_average || 0,
                  ).toFixed(1)}`}
                >
                  <div className="detail-rating-item">
                    <span>Management:</span>
                    <div>
                      <StarRating
                        rating={parseFloat(averages?.management_average || 0)}
                      />
                    </div>
                  </div>
                </Tooltip>
                <Tooltip
                  title={`Environment: ${parseFloat(
                    averages?.work_environment_average || 0,
                  ).toFixed(1)}`}
                >
                  <div className="detail-rating-item">
                    <span>Environment:</span>
                    <div>
                      <StarRating
                        rating={parseFloat(
                          averages?.work_environment_average || 0,
                        )}
                      />
                    </div>
                  </div>
                </Tooltip>
                <Tooltip
                  title={`Clientele: ${parseFloat(
                    averages?.clientele_average || 0,
                  ).toFixed(1)}`}
                >
                  <div className="detail-rating-item">
                    <span>Clientele:</span>
                    <div>
                      <StarRating
                        rating={parseFloat(averages?.clientele_average || 0)}
                      />
                    </div>
                  </div>
                </Tooltip>
              </div>
            </div>
          )}
        </div>

        <div className="detail-posts">
          <h2 className="detail-section-header">Reviews</h2>
          {displayPosts.length > 0 ? (
            displayPosts.map((post, index) => (
              <div key={index} className="detail-post-tag">
                <h3 className="detail-post-title">{post.title}</h3>
                <p className="detail-post-comment">{post.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
          {allPosts && allPosts.length > 3 && (
            <button className="see-all-btn" onClick={openAllReviews}>
              See All Reviews
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
