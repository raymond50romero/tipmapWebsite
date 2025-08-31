import React, { useState } from "react";
import PropTypes from "prop-types";

import "./styles.css";

export default function PostDetailsForm({ setTitle, setComment, setClose }) {
  return (
    <form
      className="new-post-form-container"
      onSubmit={(e) => {
        e.preventDefault();
        setClose(true);
      }}
    >
      <h6 className="new-post-helper-header">Optional</h6>
      <p className="new-post-details">Add a comment to your post</p>
      <div className="avg-tips-container">
        <input
          type="text"
          placeholder="Title"
          id="post-details-title"
          className="post-details-inputs"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <textarea
          placeholder="Comment"
          id="post-details-textarea"
          className="post-details-inputs"
          onChange={(event) => {
            setComment(event.target.value);
          }}
        ></textarea>
      </div>
      <button className="login-button" id="create-new-post-button">
        Create Post
      </button>
    </form>
  );
}

PostDetailsForm.propTypes = {
  setTitle: PropTypes.func,
  setComment: PropTypes.func,
  setClose: PropTypes.func,
};
