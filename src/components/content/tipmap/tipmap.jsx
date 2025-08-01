import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./styles.css";

const MAPBOXGL_TOKEN = import.meta.env.VITE_MAP_TOKEN;

// San Diego long, lat: -177.161087, 32.715736

export default function Tipmap() {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = MAPBOXGL_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-117.05, 32.8],
      zoom: 10,
    });

    return () => {
      mapRef.current.remove();
    };
  });

  return (
    <>
      <div id="tipmap" ref={mapContainerRef} />
    </>
  );
}
