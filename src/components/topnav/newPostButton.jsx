import React from "react";

import "./styles.css";

export default function NewPostButton() {
  function createPost() {
    const newPostWindow = document.getElementById("new-post-window");
    const blurBackground = document.getElementById("blur-background");
    if (newPostWindow) {
      newPostWindow.style.display = "block";
      blurBackground.style.display = "block";
    }
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
