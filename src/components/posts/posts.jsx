import EachPost from "../../features/posts/eachPost.jsx";
import LeftArrow from "./leftArrow.jsx";
import RightArrow from "./rightArrow.jsx";
import "./styles.css";

export default function Posts() {
  return (
    <div id="posts-container">
      <section id="posts">
        <h2 id="posts-header">Posts</h2>
        <EachPost />
      </section>
      <section id="posts-show-arrow">
        <LeftArrow />
      </section>
    </div>
  );
}
