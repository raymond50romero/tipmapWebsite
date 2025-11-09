export default function LeftArrow({ setShowPosts }) {
  return (
    <div>
      <svg
        className="posts-arrows"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#fbbf24"
        onClick={() => {
          setShowPosts(false);
        }}
      >
        <path
          d="M15 18 L9 12 L15 6"
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
