import { useState, useEffect } from "react";
import { CloseOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import axios from "axios";
import { useMapState } from "../../../contexts/mapState.jsx";
import { useLoginStatus } from "../../../contexts/loginStatus.jsx";
import StarRating from "../../../features/posts/starRating.jsx";
import DollarRating from "../../../features/posts/dollarRating.jsx";
import "./styles.css";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const newCommentRoute = import.meta.env.VITE_NEW_COMMENT;
const getCommentsRoute = import.meta.env.VITE_GET_COMMENTS;

export default function CommentsWindow() {
  const {
    isCommentsWindowOpen,
    setIsCommentsWindowOpen,
    selectedReviewData,
    setSelectedReviewData,
  } = useMapState();
  const { loginStatus } = useLoginStatus();

  const [showRatings, setShowRatings] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isCommentsWindowOpen && selectedReviewData?.post_id) {
      axios
        .get(
          `${host}:${port}/${getCommentsRoute}/${selectedReviewData.post_id}`,
        )
        .then((res) => {
          if (res.status === 200) {
            setComments(res.data.comments);
          }
        })
        .catch((error) => {
          console.log("error fetching comments: ", error);
        });
    } else {
      setComments([]);
    }
  }, [isCommentsWindowOpen, selectedReviewData?.post_id]);

  if (!isCommentsWindowOpen || !selectedReviewData) return null;

  const closeWindow = () => {
    setIsCommentsWindowOpen(false);
    setSelectedReviewData(null);
    setNewComment("");
  };

  const handleSubmitComment = async () => {
    if (!newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await axios.post(
        `${host}:${port}/${newCommentRoute}`,
        { postId: selectedReviewData.post_id, commentText: newComment },
        { withCredentials: true },
      );

      if (res.status === 201) {
        setComments((prev) => [...prev, res.data.comment]);
        setNewComment("");
      }
    } catch (error) {
      console.log("error submitting comment: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="window show-window shifted-right"
      id="review-detail-window"
    >
      <div className="window-header">
        <h1 className="detail-name">{selectedReviewData.title}</h1>
        <CloseOutlined className="close-btn" onClick={closeWindow} />
      </div>
      <div style={{ marginTop: "1rem" }}>
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
              <Tooltip
                title={`Weekday Tips: ${selectedReviewData.weekday_tips}`}
              >
                <div className="review-detail-rating-item tips-item">
                  <span>Weekday Tips:</span>
                  <DollarRating rating={selectedReviewData.weekday_tips} />
                </div>
              </Tooltip>
              <Tooltip
                title={`Weekend Tips: ${selectedReviewData.weekend_tips}`}
              >
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
              <Tooltip
                title={`Environment: ${selectedReviewData.work_environment}`}
              >
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

        <div className="comments-section">
          <h3 className="comments-header">Comments</h3>
          <div className="comments-list">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.comment_id} className="comment-item">
                  <div className="comment-meta">
                    <span className="comment-username">
                      {comment.user?.username}
                    </span>
                    <span className="comment-date">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="comment-text">{comment.comment_text}</p>
                </div>
              ))
            ) : (
              <p className="no-comments">No comments yet.</p>
            )}
          </div>
          {loginStatus && (
            <div className="comment-input-container">
              <textarea
                className="comment-input"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={3}
              />
              <button
                className="comment-submit-btn"
                onClick={handleSubmitComment}
                disabled={isSubmitting || !newComment.trim()}
              >
                {isSubmitting ? "Posting..." : "Post"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
