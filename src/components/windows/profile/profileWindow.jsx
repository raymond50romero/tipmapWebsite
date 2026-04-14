import { useState } from "react";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";

import ProfileInfo from "../../../features/profile/profileInfo.jsx";
import UserPosts from "../../../features/profile/userPosts.jsx";
import doLogout from "../../../features/auth/api/doLogout.jsx";
import { useHelper } from "../../../contexts/helperContext.jsx";
import { useLoginStatus } from "../../../contexts/loginStatus.jsx";
import { useProfileStatus } from "../../../contexts/profileStatus.jsx";
import "./styles.css";

export default function ProfileWindow() {
  const { setLoginStatus } = useLoginStatus();
  const { profileStatus, setProfileStatus } = useProfileStatus();
  const showHelper = useHelper();

  function closeWindow() {
    const profileWindow = document.getElementById("profile-window");
    const blurBackground = document.getElementById("blur-background");
    if (profileWindow) {
      profileWindow.style.display = "none";
      blurBackground.style.display = "none";
    }
  }

  async function logout() {
    const logoutResult = await doLogout();
    if (!logoutResult) {
      console.log("unable to logout");
      showHelper("unable to logout");
      return false;
    }
    closeWindow();
    setLoginStatus(false);
    setProfileStatus(() => ({
      username: "",
      email: "",
      occupation: ["", ""],
      posts: {},
    }));
    showHelper("logout successful");
    return true;
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
      <UserPosts />
      <button
        id="logout-button"
        className="login-button"
        onClick={() => logout()}
      >
        Logout
      </button>
    </section>
  );
}
