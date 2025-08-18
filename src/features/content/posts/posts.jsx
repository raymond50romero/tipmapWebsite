import React from "react";

import restaurantImage from "../../../../public/images/restaurant_image.png";
import "./styles.css";

export default function Posts({
  title,
  location,
  numStars,
  tipsRange,
  clienteleRating,
  managementRating,
  workEnvironmentRating,
}) {
  return (
    <div className="posts-tile-container">
      <div className="posts-tile-image-container">
        <img src={restaurantImage} className="posts-tile-image" />
      </div>
      <div className="posts-tile-details-container">
        <section className="posts-tile-header">
          <h5>{title ? title : "no title found"}</h5>
          <h5>{location ? location : "no location found"}</h5>
          <h5>{numStars ? numStars : "no rating found"}</h5>
        </section>
        <section className="posts-tile-all-reviews">
          <h6>
            {tipsRange
              ? tipsRange
              : "no rating for tips found for your occupation"}
          </h6>
          <h6>
            {clienteleRating
              ? clienteleRating
              : "no rating found for clientele"}
          </h6>
          <h6>
            {managementRating
              ? managementRating
              : "no rating found for management rating"}
          </h6>
          <h6>
            {workEnvironmentRating
              ? workEnvironmentRating
              : "no rating found for work environment"}
          </h6>
        </section>
      </div>
    </div>
  );
}
