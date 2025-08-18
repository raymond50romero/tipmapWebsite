import React, { useState } from "react";

import Posts from "../../../features/content/posts/posts.jsx";

import { useHelper } from "../../helper/helperContext.jsx";
import "./styles.css";

export default function PostTiles() {
  // TODO figure out how to get images from backend and pass them
  // to the restaurant tile component
  const { title, setTitle } = useState();
  const { location, setLocation } = useState();
  const { numStars, setNumStars } = useState();
  const { tipsRange, setTipsRange } = useState();
  const { clienteleRating, setClienteleRating } = useState();
  const { managementRating, setManagementRating } = useState();
  const { workEnvironment, setWorkEnvironment } = useState();
  const setHelper = useHelper();

  // TODO reach into the backend to get data of each restaurant,
  // then populate each tile via a loop

  return (
    <div id="post-tiles-container">
      <div id="post-tiles-filter-container">Filter goes here</div>
      <Posts
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
