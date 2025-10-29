import React, { useState } from "react";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";

import "./styles.css";

export default function ProfileWindow() {
  const [username, setUsername] = useState();

  function closeWindow() {
    const profileWindow = document.getElementById("profile-window");
    const blurBackground = document.getElementById("blur-background");
    if (profileWindow) {
      profileWindow.style.display = "none";
      blurBackground.style.display = "none";
    }
  }

  return (
    <section className="window" id="profile-window">
      <div id="profile-window-header-container">
        <h3 id="profile-window-header">Profile</h3>
        <CloseOutlined
          className="auth-window-header-buttons"
          id="profile-close-window"
          onClick={() => {
            closeWindow();
          }}
        />
      </div>
      <>
        <h3>Hi! {username}</h3>
        <div>this is container of all the users info</div>
      </>
    </section>
  );
}
