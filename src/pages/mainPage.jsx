import React from "react";

import TopNav from "../components/topnav/topnav";
import ContentWindow from "../components/content/contentWindow.jsx";

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
      </div>
    </>
  );
}
