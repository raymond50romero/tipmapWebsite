import React, { useState } from "react";

import Posts from "../../../features/content/posts/posts.jsx";

import { useHelper } from "../../../globals/helper/helperContext.jsx";
import "./styles.css";

export default function PostTiles() {
  // TODO figure out how to get images from backend and pass them
  // to the restaurant tile component
  const { title, setTitle } = useState();
  const { location, setLocation } = useState();
  const { numStars, setNumStars } = useState();
  const { weekdayTipsRange, setWeekdayTipsRange } = useState();
  const { weekendTipsRange, setWeekendTipsRange } = useState();
  const { clienteleRating, setClienteleRating } = useState();
  const { managementRating, setManagementRating } = useState();
  const { workEnvironment, setWorkEnvironment } = useState();
  const setHelper = useHelper();

  return (
    <div id="post-tiles-container">
      <Posts
        title={title}
        location={location}
        numStars={numStars}
        weekdayTipsRange={weekdayTipsRange}
        weekendTipsRange={weekendTipsRange}
        clienteleRating={clienteleRating}
        managementRating={managementRating}
        workEnvironment={workEnvironment}
      />
    </div>
  );
}
