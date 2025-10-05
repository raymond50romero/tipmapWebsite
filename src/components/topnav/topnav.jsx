import React, { useState } from "react";

import LoginButton from "./loginButton";
import NewPostButton from "./newPostButton.jsx";
import AuthWindow from "../windows/auth/authWindow.jsx";
import NewPostWindow from "../windows/newPost/newPostWindow.jsx";
import NavTitle from "../../features/topnav/navTitle.jsx";

import "./styles.css";

export default function TopNav() {
  return (
    <div id="topnav-container">
      <NavTitle />
      <div id="topnav-button-container">
        <NewPostButton />
        <LoginButton />
      </div>
      <AuthWindow />
      <NewPostWindow />
    </div>
  );
}
