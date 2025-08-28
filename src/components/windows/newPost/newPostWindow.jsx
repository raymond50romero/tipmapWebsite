import React from "react";
import { CloseOutlined } from "@ant-design/icons";

import NewPostForm from "../../../features/newPost/newPostForm.jsx";
import "./styles.css";

export default function NewPostWindow() {
  function closeWindow() {
    const newPostWindow = document.getElementById("new-post-window");
    const blurBackground = document.getElementById("blur-background");
    if (newPostWindow) {
      newPostWindow.style.display = "none";
      blurBackground.style.display = "none";
    }
  }

  return (
    <section className="window" id="new-post-window">
      <div id="new-post-window-header-container">
        <h3 id="new-post-header">Create a New Post</h3>
        <CloseOutlined
          className="auth-window-header-buttons"
          id="new-post-close-window"
          onClick={() => {
            closeWindow();
          }}
        />
      </div>
      <>
        <NewPostForm />
      </>
    </section>
  );
}
