import React, { useState } from "react";

export default function ProfilePage() {
  const [username, setUsername] = useState("Username");

  // TODO add profile picture before username
  // TODO add all descriptions
  // TODO add posts made by user
  return (
    <>
      <h3 id="profile-header">Hi, {username}!</h3>
      <h4>position</h4>
      <div id="profile-description-container">
        <span>number of upvotes</span>
        <span>number of posts</span>
        <span>age of account</span>
      </div>
      <div id="profile-all-posts"></div>
    </>
  );
}
