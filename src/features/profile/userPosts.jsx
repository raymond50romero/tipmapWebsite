import { useEffect, useState } from "react";
import { getUserPosts } from "./api/getUserPosts.jsx";
import EachPost from "../posts/eachPost.jsx";
import "./styles.css";

export default function UserPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserPosts() {
      setLoading(true);
      const userPosts = await getUserPosts();
      if (userPosts) {
        setPosts(userPosts);
      }
      setLoading(false);
    }

    fetchUserPosts();
  }, []);

  if (loading) {
    return (
      <div id="user-posts-container">
        <p>Loading your posts...</p>
      </div>
    );
  }

  return (
    <div id="user-posts-container">
      <h4 id="user-posts-header">Your Posts</h4>
      <div id="user-posts-list">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <EachPost
              key={`${post.post_id || index}`}
              post={{ ...post, allPosts: [post] }}
              currentCategory="overall_average"
            />
          ))
        ) : (
          <p>You haven't made any posts yet.</p>
        )}
      </div>
    </div>
  );
}
