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

  const [selectedRestaurantData, setSelectedRestaurantData] = useState(null);
  const [isDetailWindowOpen, setIsDetailWindowOpen] = useState(false);
  const [isAllReviewsWindowOpen, setIsAllReviewsWindowOpen] = useState(false);

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
        selectedRestaurantData,
        setSelectedRestaurantData,
        isDetailWindowOpen,
        setIsDetailWindowOpen,
        isAllReviewsWindowOpen,
        setIsAllReviewsWindowOpen,
      }}
    >
      {children}
    </MapStateContext.Provider>
  );
}

MapStateProvider.propTypes = {
  children: PropTypes.node,
};
