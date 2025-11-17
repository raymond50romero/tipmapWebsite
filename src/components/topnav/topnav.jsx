import React, { useState } from "react";

import LoginButton from "./loginButton";
import NewPostButton from "./newPostButton.jsx";
import NavTitle from "../../features/topnav/navTitle.jsx";

import "./styles.css";

export default function TopNav() {
  return (
    <div id="topnav-container">
      <h1 id="topnav-title">Tipmap</h1>
      <div id="topnav-button-container">
        <NewPostButton />
        <LoginButton />
      </div>
    </div>
  );
}
