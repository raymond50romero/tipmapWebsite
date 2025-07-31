import React from "react";

import RestaurantTiles from "../../features/mainContent/tiles/restaurantTiles/restaurantTiles.jsx";
import Tipmap from "../content/tipmap/tipmap.jsx";
import ProfilePage from "../account/profilePage.jsx";
import { useContentStatus } from "../../globals/contentStatus/contentStatus.jsx";

export default function ContentWindow() {
  const { contentStatus } = useContentStatus();

  // TODO same conditional used for auth window, use it for content displayed
  switch (contentStatus) {
    case "restaurant":
      return <RestaurantTiles />;
    case "profile":
      return <ProfilePage />;
    default:
      return <Tipmap />;
  }
}
