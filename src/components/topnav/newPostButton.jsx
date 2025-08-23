import React from "react";

import "./styles.css";

export default function NewPostButton() {
  function createPost() {
    console.log("post created");
  }

  return (
    <div className="login-buttons-container">
      <button
        className="topnav-buttons"
        id="new-post-button"
        onClick={() => {
          createPost();
        }}
      >
        + New Post
      </button>
    </div>
  );
}
