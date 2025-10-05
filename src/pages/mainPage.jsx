import React from "react";

import TopNav from "../components/topnav/topnav";
import ContentWindow from "../components/content/contentWindow.jsx";
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
          <ContentWindow />
        </main>
        <div id="blur-background" />
        <AuthWindow />
        <NewPostWindow />
      </div>
    </>
  );
}
