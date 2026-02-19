import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const MapStateContext = createContext();

export function useMapState() {
  return useContext(MapStateContext);
}

export function MapStateProvider({ children }) {
  const [mapCenter, setMapCenter] = useState(null);

  return (
    <MapStateContext.Provider value={{ mapCenter, setMapCenter }}>
      {children}
    </MapStateContext.Provider>
  );
}

MapStateProvider.propTypes = {
  children: PropTypes.node,
};
