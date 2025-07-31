import React from "react";

import ProfilePage from "../account/profilePage.jsx";
import RestaurantTiles from "../content/restaurants/restaurantTiles.jsx";
import Tipmap from "../content/tipmap/tipmap.jsx";
import Cities from "../content/cities/cities.jsx";
import Latest from "../content/latest/latest.jsx";
import { useContentStatus } from "../../globals/contentStatus/contentStatus.jsx";

export default function ContentWindow() {
  const { contentStatus } = useContentStatus();

  // TODO same conditional used for auth window, use it for content displayed
  switch (contentStatus) {
    case "restaurant":
      return <RestaurantTiles />;
    case "profile":
      return <ProfilePage />;
    case "city":
      return <Cities />;
    case "latest":
      return <Latest />;
    default:
      return <Tipmap />;
  }
}
