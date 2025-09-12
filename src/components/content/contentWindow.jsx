import React from "react";

import PostTiles from "../content/posts/postTiles.jsx";
import Tipmap from "../content/tipmap/tipmap.jsx";
import { useContentStatus } from "../../globals/contentStatus.jsx";

export default function ContentWindow() {
  const { contentStatus } = useContentStatus();

  switch (contentStatus) {
    case "posts":
      return <PostTiles />;
    default:
      return <Tipmap />;
  }
}
