import React from "react";

import TopNav from "../components/topnav/topnav";
import SideNav from "../components/sidenav/sidenav";
import ContentWindow from "../components/content/contentWindow.jsx";

import "../index.css";

export default function MainPage() {
  return (
    <>
      <div id="main-container">
        <header>
          <TopNav />
        </header>
        <nav>
          <SideNav />
        </nav>
        <main>
          <ContentWindow />
        </main>
        <div id="blur-background" />
      </div>
    </>
  );
}
