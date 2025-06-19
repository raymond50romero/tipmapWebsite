import React from 'react';

import RestaurantTiles from '../../features/mainContent/tiles/restaurantTiles/restaurantTiles.jsx';

export default function ContentWindow() {
  return (
    <div>
      {/*TODO add a conditional statement to display what the user wants*/}
      <RestaurantTiles />
    </div>
  );
}
