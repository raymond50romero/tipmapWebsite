import PropTypes from "prop-types";

export default function RightArrow({ setShowPosts }) {
  return (
    <div>
      <svg
        className="posts-arrows"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#fbbf24"
        onClick={() => {
          setShowPosts(true);
        }}
      >
        <path
          d="M9 6 L15 12 L9 18"
          fill="none"
          stroke="#000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

RightArrow.propTypes = {
  setShowPosts: PropTypes.func,
};
