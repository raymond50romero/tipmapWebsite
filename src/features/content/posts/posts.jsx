import React from "react";
import PropTypes from "prop-types";

import restaurantImage from "../../../../public/images/restaurant_image.png";
import "./styles.css";

export default function Posts({
  title,
  location,
  numStars,
  weekdayTipsRange,
  weekendTipsRange,
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
        <section className="posts-tile-format">
          <h5>{title ? title : "no title found"}</h5>
          <h5>{location ? location : "no location found"}</h5>
          <h5>{numStars ? numStars : "no overall rating found"}</h5>
        </section>
        <section className="posts-tile-format">
          <h6>
            {weekdayTipsRange
              ? weekdayTipsRange
              : "no rating for weekday tips range"}
          </h6>
          <h6>
            {weekendTipsRange
              ? weekendTipsRange
              : "no rating for weekend tips range"}
          </h6>
        </section>
        <section className="posts-tile-format">
          <h6>
            {workEnvironmentRating
              ? workEnvironmentRating
              : "no rating found for work environment"}
          </h6>
          <h6>
            {managementRating
              ? managementRating
              : "no rating found for management rating"}
          </h6>
          <h6>
            {clienteleRating
              ? clienteleRating
              : "no rating found for clientele"}
          </h6>
        </section>
      </div>
    </div>
  );
}

Posts.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  numStars: PropTypes.number,
  weekdayTipsRange: PropTypes.number,
  weekendTipsRange: PropTypes.number,
  clienteleRating: PropTypes.number,
  managementRating: PropTypes.number,
  workEnvironmentRating: PropTypes.number,
};
