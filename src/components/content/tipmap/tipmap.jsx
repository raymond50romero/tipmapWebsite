import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./styles.css";

const MAPBOXGL_TOKEN = import.meta.env.VITE_MAP_TOKEN;
const INITIAL_CENTER = [-117.1598199, 32.713659];
const INITIAL_ZOOM = 11;

// San Diego long, lat: -117.2096543, 32.8577702
// Tacos El Gordo long, lat: 32.713659878220476, -117.15981993970202

export default function Tipmap() {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const [currCenter, setCurrCenter] = useState();
  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  function goToCurrLocation() {
    mapRef.current.flyTo({
      center: center,
      zoom: zoom,
    });
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("unable to find users location");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter([position.coords.longitude, position.coords.latitude]);
        },
        (error) => {
          console.log("unable to set user position", error);
        },
      );
    }
  }, []);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOXGL_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom,
    });

    // TODO save current move coords so that you can later implement tipmap funcionality
    mapRef.current.on("move", () => {
      //mapRef.current.getZoom();
      setCurrCenter(mapRef.current.getCenter());
    });

    return () => {
      mapRef.current.remove();
    };
  }, [center, zoom]);

  return (
    <>
      <div id="tipmap" ref={mapContainerRef} />
      <button className="reset-button" onClick={goToCurrLocation}>
        Reset
      </button>
    </>
  );
}
