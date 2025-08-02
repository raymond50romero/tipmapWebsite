import React, { useState } from "react";

import EachRestaurantTile from "../../../features/content/restaurants/eachRestaurantTile.jsx";

import "./styles.css";

export default function RestaurantTiles() {
  // TODO figure out how to get images from backend and pass them
  // to the restaurant tile component
  const { title, setTitle } = useState();
  const { location, setLocation } = useState();
  const { numStars, setNumStars } = useState();
  const { tipsRange, setTipsRange } = useState();
  const { clienteleRating, setClienteleRating } = useState();
  const { managementRating, setManagementRating } = useState();
  const { workEnvironment, setWorkEnvironment } = useState();

  // TODO reach into the backend to get data of each restaurant,
  // then populate each tile via a loop

  return (
    <div id="restaurants-container">
      <div id="restaurants-filter-container">Filter goes here</div>
      <EachRestaurantTile
        title={title}
        location={location}
        numStars={numStars}
        tipsRange={tipsRange}
        clienteleRating={clienteleRating}
        managementRating={managementRating}
        workEnvironment={workEnvironment}
      />
    </div>
  );
}
