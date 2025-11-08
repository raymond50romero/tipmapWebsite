import React from "react";

import TopNav from "../components/topnav/topnav";
import Tipmap from "../components/tipmap/tipmap.jsx";
import AuthWindow from "../components/windows/auth/authWindow.jsx";
import NewPostWindow from "../components/windows/newPost/newPostWindow.jsx";
import ProfileWindow from "../components/windows/profile/profileWindow.jsx";
import Posts from "../components/posts/posts.jsx";

import "../index.css";

export default function MainPage() {
  return (
    <>
      <div id="main-container">
        <header>
          <TopNav />
        </header>
        <main>
          <Posts />
          <Tipmap />
        </main>
        <div id="blur-background" />
        <AuthWindow />
        <NewPostWindow />
        <ProfileWindow />
      </div>
    </>
  );
}
