import { useState } from "react";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";

import ProfileInfo from "../../../features/profile/profileInfo.jsx";
import OccupationPill from "../../occupationPill/occupationPill.jsx";
import { useProfileStatus } from "../../../globals/profileStatus.jsx";
import "./styles.css";

export default function ProfileWindow() {
  const { profileStatus } = useProfileStatus();

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
        <h3 id="profile-window-header">{profileStatus.username}</h3>
        <CloseOutlined
          className="auth-window-header-buttons"
          id="profile-close-window"
          onClick={() => {
            closeWindow();
          }}
        />
      </div>
      <ProfileInfo />
    </section>
  );
}
