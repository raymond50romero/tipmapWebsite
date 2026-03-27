import { useState, useMemo } from "react";
import EachPost from "../../features/posts/eachPost.jsx";
import LeftArrow from "./leftArrow.jsx";
import RightArrow from "./rightArrow.jsx";
import { useMapState } from "../../contexts/mapState.jsx";
import { useRestaurants } from "../../hooks/useRestaurants.jsx";
import "./styles.css";

export default function Posts() {
  const [showPosts, setShowPosts] = useState(false);
  const [sortCategory, setSortCategory] = useState("overall_average");
  const [sortOrder, setSortOrder] = useState("desc"); // 'desc' for highest to lowest, 'asc' for lowest to highest

  const { currCenter, currZoom, northEast, southWest } = useMapState();

  // Fetch posts using the same hook as the map
  const { data: rawData, isLoading } = useRestaurants(
    currCenter,
    currZoom,
    northEast,
    southWest,
  );

  // Filter and sort posts based on unique restaurants, category, and order
  const sortedPosts = useMemo(() => {
    if (!rawData?.posts) return [];

    // Filter to keep only one post per restaurant (using mapbox_id)
    const uniqueRestaurantsMap = new Map();
    rawData.posts.forEach((post) => {
      if (!uniqueRestaurantsMap.has(post.mapbox_id)) {
        uniqueRestaurantsMap.set(post.mapbox_id, post);
      }
    });

    const uniquePosts = Array.from(uniqueRestaurantsMap.values());

    return uniquePosts.sort((a, b) => {
      const valA = a.averages?.[sortCategory] || 0;
      const valB = b.averages?.[sortCategory] || 0;

      if (sortOrder === "desc") {
        return valB - valA;
      } else {
        return valA - valB;
      }
    });
  }, [rawData, sortCategory, sortOrder]);

  return (
    <div id="posts-container" className={showPosts ? "show" : ""}>
      <section id="posts">
        <div id="posts-header-container">
          <h2 id="posts-header">Posts</h2>
          <div id="posts-filters">
            <select 
              value={sortCategory} 
              onChange={(e) => setSortCategory(e.target.value)}
              className="sort-dropdown"
            >
              <option value="overall_average">Overall Average</option>
              <option value="weekday_tips_average">Weekday Tips</option>
              <option value="weekend_tips_average">Weekend Tips</option>
              <option value="management_average">Management</option>
              <option value="work_environment_average">Environment</option>
              <option value="clientele_average">Clientele</option>
            </select>
            <button 
              onClick={() => setSortOrder(prev => prev === "desc" ? "asc" : "desc")}
              className="sort-order-btn"
              title={sortOrder === "desc" ? "Highest to Lowest" : "Lowest to Highest"}
            >
              {sortOrder === "desc" ? "↓" : "↑"}
            </button>
          </div>
        </div>
        <div id="posts-list">
          {isLoading ? (
            <p>Loading posts...</p>
          ) : sortedPosts.length > 0 ? (
            sortedPosts.map((post, index) => (
              <EachPost 
                key={`${post.restaurant_name}-${index}`} 
                post={post} 
                currentCategory={sortCategory}
              />
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
