import React from "react";

import "./styles.css";

export default function PostDetailsForm() {
  return (
    <form className="new-post-form-container">
      <h6 className="new-post-helper-header">Optional</h6>
      <p className="new-post-details">Add a comment to your post</p>
      <div className="avg-tips-container">
        <input
          type="text"
          placeholder="Title"
          id="post-details-title"
          className="post-details-inputs"
        />
        <textarea
          placeholder="Comment"
          id="post-details-textarea"
          className="post-details-inputs"
        ></textarea>
      </div>
      <button className="login-button" id="create-new-post-button">
        Create Post
      </button>
    </form>
  );
}
