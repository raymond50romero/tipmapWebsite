import React, { useState } from "react";
import { CloseOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useMapState } from "../../../contexts/mapState.jsx";
import StarRating from "../../../features/posts/starRating.jsx";
import DollarRating from "../../../features/posts/dollarRating.jsx";
import "./reviewDetailStyles.css";

export default function ReviewDetailWindow() {
  const { isReviewDetailWindowOpen, setIsReviewDetailWindowOpen, selectedReviewData, setSelectedReviewData } = useMapState();

  const [showRatings, setShowRatings] = useState(false);

  if (!isReviewDetailWindowOpen || !selectedReviewData) return null;

  const closeWindow = () => {
    setIsReviewDetailWindowOpen(false);
    setSelectedReviewData(null);
  };

  return (
    <section className="window show-window shifted-right" id="review-detail-window">
      <div className="window-header">
        <h1 className="detail-name">Review</h1>
        <CloseOutlined className="close-btn" onClick={closeWindow} />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <h2 className="review-detail-title">{selectedReviewData.title}</h2>
        <p className="review-detail-comment">{selectedReviewData.comment}</p>
        <div className="ratings-dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setShowRatings(!showRatings)}
          >
            <span>Ratings</span>
            {showRatings ? <UpOutlined /> : <DownOutlined />}
          </button>

          {showRatings && (
            <div className="review-detail-ratings">
              <Tooltip title={`Weekday Tips: ${selectedReviewData.weekday_tips}`}>
                <div className="review-detail-rating-item tips-item">
                  <span>Weekday Tips:</span>
                  <DollarRating rating={selectedReviewData.weekday_tips} />
                </div>
              </Tooltip>
              <Tooltip title={`Weekend Tips: ${selectedReviewData.weekend_tips}`}>
                <div className="review-detail-rating-item tips-item">
                  <span>Weekend Tips:</span>
                  <DollarRating rating={selectedReviewData.weekend_tips} />
                </div>
              </Tooltip>
              <Tooltip title={`Management: ${selectedReviewData.management}`}>
                <div className="review-detail-rating-item">
                  <span>Management:</span>
                  <StarRating rating={selectedReviewData.management} />
                </div>
              </Tooltip>
              <Tooltip title={`Environment: ${selectedReviewData.work_environment}`}>
                <div className="review-detail-rating-item">
                  <span>Environment:</span>
                  <StarRating rating={selectedReviewData.work_environment} />
                </div>
              </Tooltip>
              <Tooltip title={`Clientele: ${selectedReviewData.clientele}`}>
                <div className="review-detail-rating-item">
                  <span>Clientele:</span>
                  <StarRating rating={selectedReviewData.clientele} />
                </div>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
