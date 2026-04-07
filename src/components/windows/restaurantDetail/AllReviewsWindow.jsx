import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useMapState } from "../../../contexts/mapState.jsx";
import "./allReviewsStyles.css";

export default function AllReviewsWindow() {
  const { isAllReviewsWindowOpen, setIsAllReviewsWindowOpen, selectedRestaurantData } = useMapState();

  if (!isAllReviewsWindowOpen || !selectedRestaurantData) return null;

  const { restaurant_name, allPosts } = selectedRestaurantData;

  const closeWindow = () => {
    setIsAllReviewsWindowOpen(false);
  };

  return (
    <section className="window show-window shifted-right" id="all-reviews-window">
      <div className="window-header">
        <h1 className="detail-name">All Reviews - {restaurant_name}</h1>
        <CloseOutlined className="close-btn" onClick={closeWindow} />
      </div>
      <div className="detail-posts all-posts-list">
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
    </section>
  );
}
