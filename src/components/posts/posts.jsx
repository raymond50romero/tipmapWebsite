import { useState, useMemo } from "react";
import EachPost from "../../features/posts/eachPost.jsx";
import LeftArrow from "./leftArrow.jsx";
import RightArrow from "./rightArrow.jsx";
import { useMapState } from "../../contexts/mapState.jsx";
import { useRestaurants } from "../../hooks/useRestaurants.jsx";
import "./styles.css";

export default function Posts() {
  const [showPosts, setShowPosts] = useState(false);
  const { currCenter, currZoom, northEast, southWest } = useMapState();

  // Fetch posts using the same hook as the map
  const { data: rawData, isLoading } = useRestaurants(
    currCenter,
    currZoom,
    northEast,
    southWest,
  );

  // Sort posts by clientele descending
  const sortedPosts = useMemo(() => {
    if (!rawData?.posts) return [];
    // Slice to create a copy before sorting
    return [...rawData.posts].sort((a, b) => b.clientele - a.clientele);
  }, [rawData]);

  return (
    <div id="posts-container" className={showPosts ? "show" : ""}>
      <section id="posts">
        <h2 id="posts-header">Posts</h2>
        <div id="posts-list">
          {isLoading ? (
            <p>Loading posts...</p>
          ) : sortedPosts.length > 0 ? (
            sortedPosts.map((post, index) => (
              <EachPost key={`${post.restaurant_name}-${index}`} post={post} />
            ))
          ) : (
            <p>No posts found in this area.</p>
          )}
        </div>
      </section>
      <section id="posts-show-arrow">
        {showPosts ? (
          <LeftArrow setShowPosts={setShowPosts} />
        ) : (
          <RightArrow setShowPosts={setShowPosts} />
        )}
      </section>
    </div>
  );
}
