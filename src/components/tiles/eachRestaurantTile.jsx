import React from 'react';

import restaurantImage from '../../../public/images/restaurant_image.png';
import './tileStyles.css';

export default function EachRestaurantTile() {
  return (
    <div className="restaurant-tile-container">
      <div className="restaurant-tile-image-container">
        <img src={restaurantImage} className="restaurant-tile-image" />
      </div>
      <div className="restaurant-tile-details-container">
        <section className="restaurant-tile-header">
          <h5>Title of Restaurant</h5>
          <h5>Number of stars</h5>
        </section>

        <p>address</p>
        <div>container for all of the ratings</div>
      </div>
    </div>
  );
}
