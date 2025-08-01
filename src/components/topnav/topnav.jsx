import React, { useState } from "react";

import LoginButton from "./loginButton";
import AuthWindow from "../windows/authWindow.jsx";

import "./styles.css";

export default function TopNav() {
  const [didLogin, setDidLogin] = useState(false);

  return (
    <div id="topnav-container">
      <h1 id="title">Front of House Tips</h1>
      <input placeholder="Search" id="search-bar" />
      <LoginButton didLogin={didLogin} />
      <AuthWindow setIsLoggedIn={setDidLogin} />
    </div>
  );
}
