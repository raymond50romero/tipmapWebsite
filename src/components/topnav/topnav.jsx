import React, { useState } from "react";

import LoginButton from "./loginButton";
import NewPostButton from "./newPostButton.jsx";
import AuthWindow from "../windows/auth/authWindow.jsx";
import NewPostWindow from "../windows/newPost/newPostWindow.jsx";

import "./styles.css";

export default function TopNav() {
  const [didLogin, setDidLogin] = useState(false);

  return (
    <div id="topnav-container">
      <h1 id="title">Tip map</h1>
      {
        //<input placeholder="Search" id="search-bar" />
      }
      <div id="topnav-button-container">
        <NewPostButton />
        <LoginButton didLogin={didLogin} />
      </div>
      <AuthWindow setIsLoggedIn={setDidLogin} />
      <NewPostWindow />
    </div>
  );
}
