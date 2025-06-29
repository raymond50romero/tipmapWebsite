import React, { useState } from 'react';

import TopNav from '../components/topnav/topnav';
import SideNav from '../components/sidenav/sidenav';
import ContentWindow from '../components/content/contentWindow.jsx';
import { HelperProvider } from '../components/helper/helperContext.jsx';

import '../index.css';

function MainPage() {
  return (
    <>
      <HelperProvider>
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
      </HelperProvider>
    </>
  );
}

export default MainPage;
