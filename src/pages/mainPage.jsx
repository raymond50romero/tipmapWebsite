import React from 'react';

import TopNav from '../components/topnav/topnav';
import SideNav from '../components/sidenav/sidenav';
import RestaurantTiles from '../components/tiles/restaurantTiles';

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
          {/* TODO add a conditional statement to show tiles based on what the user selects. going to come from the sidenav*/}
          <RestaurantTiles />
        </main>
        <div id="blur-background" />
      </div>
    </>
  );
}

export default MainPage;
