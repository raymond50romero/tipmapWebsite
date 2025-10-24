import React from "react";

import TopNav from "../components/topnav/topnav";
import Tipmap from "../components/tipmap/tipmap.jsx";
import AuthWindow from "../components/windows/auth/authWindow.jsx";
import NewPostWindow from "../components/windows/newPost/newPostWindow.jsx";

import "../index.css";

export default function MainPage() {
  return (
    <>
      <div id="main-container">
        <header>
          <TopNav />
        </header>
        <main>
          <Tipmap />
        </main>
        <div id="blur-background" />
        <AuthWindow />
        <NewPostWindow />
      </div>
    </>
  );
}
