import React from 'react';

import './tileStyles.css';
import EachRestaurantTile from './eachRestaurantTile.jsx';

export default function RestaurantTiles() {
  return (
    <div className="tiles-container">
      <EachRestaurantTile />
    </div>
  );
}
