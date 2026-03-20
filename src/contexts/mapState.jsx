import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const MapStateContext = createContext();

export function useMapState() {
  return useContext(MapStateContext);
}

export function MapStateProvider({ children }) {
  const [mapCenter, setMapCenter] = useState(null);
  const [searchedPlace, setSearchedPlace] = useState(null);
  const [clickedRestaurant, setClickedRestaurant] = useState(null);

  // map bounds and view state for data fetching
  const [currCenter, setCurrCenter] = useState(null);
  const [currZoom, setCurrZoom] = useState(12);
  const [northEast, setNorthEast] = useState(null);
  const [southWest, setSouthWest] = useState(null);

  return (
    <MapStateContext.Provider
      value={{
        mapCenter,
        setMapCenter,
        searchedPlace,
        setSearchedPlace,
        clickedRestaurant,
        setClickedRestaurant,
        currCenter,
        setCurrCenter,
        currZoom,
        setCurrZoom,
        northEast,
        setNorthEast,
        southWest,
        setSouthWest,
      }}
    >
      {children}
    </MapStateContext.Provider>
  );
}

MapStateProvider.propTypes = {
  children: PropTypes.node,
};
