import React from 'react';

import TopNav from '../components/topnav/topnav';
import SideNav from '../components/sidenav/sidenav';
import ContentWindow from '../components/content/contentWindow.jsx';

import '../index.css';

function MainPage() {
  return (
    <>
      <div id="main-container">
        <header id="header">
          <TopNav />
        </header>
        <nav id="nav">
          <SideNav />
        </nav>
        <main id="main">
          <ContentWindow />
        </main>
        <div id="blur-background" />
      </div>
    </>
  );
}

export default MainPage;
