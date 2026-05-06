import PropTypes from "prop-types";
import "./styles.css";

export default function EachUserMadePost({ post }) {
  if (!post) return null;

  return (
    <div className="each-user-made-post" style={{ cursor: "pointer" }}>
      <h6 className="each-user-made-post-header">{post.restaurant_name}</h6>

      {post.title && (
        <p className="each-user-made-post-title">{post.title}</p>
      )}

      {post.comment && (
        <p className="each-user-made-post-comment">{post.comment}</p>
      )}

      {!post.title && !post.comment && (
        <p className="each-user-made-post-empty">No title or comment</p>
      )}
    </div>
  );
}

EachUserMadePost.propTypes = {
  post: PropTypes.shape({
    restaurant_name: PropTypes.string.isRequired,
    title: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
};
