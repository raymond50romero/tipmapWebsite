import React from 'react';

import TopNav from './components/topnav/topnav';
import SideNav from './components/sidenav/sidenav';

import './index.css';

function App() {
  return (
    <>
      <div id="main-container">
        <header id="header">
          <TopNav />
        </header>
        <nav id="nav">
          <SideNav />
        </nav>
        <main id="main"></main>
        <div id="blur-background" />
      </div>
    </>
  );
}

export default App;
