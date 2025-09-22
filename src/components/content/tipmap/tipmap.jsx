import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { useHelper } from "../../../globals/helper/helperContext.jsx";
import { useUserLongLat } from "../../../globals/userLongLat.jsx";
import { getPosts } from "../../../features/content/api/getPosts.jsx";
import "./styles.css";

const MAPBOXGL_TOKEN = import.meta.env.VITE_MAP_TOKEN;
const INITIAL_CENTER = [-117.1598199, 32.713659];
const INITIAL_ZOOM = 12.5;
const INTERACTION_DEBOUNCE_MS = 250;
const CENTER_DELTA_THRESHOLD = 0.005;
const ZOOM_DELTA_THRESHOLD = 0.25;

// San Diego long, lat: -117.2096543, 32.8577702
// Tacos El Gordo long, lat: 32.713659878220476, -117.15981993970202
// Petco Park long, lat: -117.15704, 32.70767
// Seaport Village long, lat: -117.17093, 32.70923

export default function Tipmap() {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const interactionTimeoutRef = useRef();
  const lastFetchedParamsRef = useRef({ center: null, zoom: null });
  const { setUserLongLat } = useUserLongLat();
  const [points, setPoints] = useState();
  const [currCenter, setCurrCenter] = useState();
  const [currZoom, setCurrZoom] = useState();
  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);
  const setHelper = useHelper();

  function goToCurrLocation() {
    mapRef.current.flyTo({
      center: center,
      zoom: zoom,
    });
  }

  async function grabPosts(center, zoom) {
    const thePosts = await getPosts(center, zoom);
    console.log("this is result from getting posts: ", thePosts);
  }

  // load all of the points on the map
  useEffect(() => {
    if (!currCenter || currCenter.length !== 2 || currZoom === undefined)
      return;
    grabPosts(currCenter, currZoom);
    lastFetchedParamsRef.current = {
      center: [...currCenter],
      zoom: currZoom,
    };
  }, [currCenter, currZoom]);

  // set users location, default to San Diego if user does
  // not want to share location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter([position.coords.longitude, position.coords.latitude]);
        setHelper("position set to your location");
        setUserLongLat([position.coords.longitude, position.coords.latitude]);
      },
      (error) => {
        console.error("unable to set user position", error);
        setHelper("unable to find your location, defaulting to San Diego");
        setUserLongLat(null);
      },
    );
  }, [setHelper, setUserLongLat]);

  // create map on startup
  useEffect(() => {
    mapboxgl.accessToken = MAPBOXGL_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom,
    });

    // demo points for testing
    const defaultPoints = {
      type: "FeatureCollection",
      features: [
        {
          // petco park
          type: "Feature",
          properties: { value: 1 },
          geometry: { type: "Point", coordinates: [-117.15704, 32.70767] },
        },
        {
          // seaport village
          type: "Feature",
          properties: { value: 0.5 },
          geometry: { type: "Point", coordinates: [-117.17093, 32.70923] },
        },
        {
          // tacos el gordo
          type: "Feature",
          properties: { value: 0.8 },
          geometry: { type: "Point", coordinates: [-117.1598, 32.71362] },
        },
      ],
    };

    // update zoom and center that is sent to backend whenever it passes a certain threshold
    function updateCenterAndZoom() {
      const newCenter = mapRef.current.getCenter().toArray();
      const newZoom = mapRef.current.getZoom();
      const { center: lastCenter, zoom: lastZoom } =
        lastFetchedParamsRef.current;

      const centerChanged =
        !lastCenter ||
        Math.abs(lastCenter[0] - newCenter[0]) > CENTER_DELTA_THRESHOLD ||
        Math.abs(lastCenter[1] - newCenter[1]) > CENTER_DELTA_THRESHOLD;
      const zoomChanged =
        !lastZoom || Math.abs(lastZoom - newZoom) > ZOOM_DELTA_THRESHOLD;

      if (centerChanged || zoomChanged) {
        setCurrCenter(newCenter);
        setCurrZoom(newZoom);
      }
    }

    // updates after a certain alloted time
    function scheduleCenterAndZoomUpdate() {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }

      interactionTimeoutRef.current = setTimeout(
        updateCenterAndZoom,
        INTERACTION_DEBOUNCE_MS,
      );
    }

    mapRef.current.on("move", scheduleCenterAndZoomUpdate);
    mapRef.current.on("zoom", scheduleCenterAndZoomUpdate);

    // set up heatmap
    mapRef.current.on("load", () => {
      mapRef.current.addSource("hotspots", {
        type: "geojson",
        data: points ? points : defaultPoints, // or a URL: 'https://example.com/your-data.geojson'
      });

      mapRef.current.addLayer({
        id: "hotspots-heat",
        type: "heatmap",
        source: "hotspots",
        maxzoom: 16,
        paint: {
          // Weight each point by the "value" property (default 1 if omitted)
          "heatmap-weight": [
            "interpolate",
            ["linear"],
            ["get", "value"],
            0,
            0,
            6,
            6,
          ],
          // Intensify with zoom
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            0.8,
            10,
            1.7,
            15,
            3.2,
          ],
          // Color ramp based on density
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(0,0,255,0)",
            0.1,
            "blue",
            0.3,
            "cyan",
            0.5,
            "lime",
            0.7,
            "yellow",
            1,
            "red",
          ],
          // Radius grows with zoom
          "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 9, 20],
          // Fade heatmap as we zoom in (to reveal points)
          "heatmap-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            12,
            0.7,
            16,
            0.3,
          ],
        },
        slot: "top",
      });

      // 3) Optional: show points as circles when zoomed in
      mapRef.current.addLayer({
        id: "hotspots-point",
        type: "circle",
        source: "hotspots",
        minzoom: 14,
        paint: {
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 14, 2, 22, 10],
          "circle-color": "#aaa",
          "circle-stroke-color": "black",
          "circle-stroke-width": 1,
        },
        slot: "top",
      });
    });

    mapRef.current.on("move", () => {
      updateCenterAndZoom();
    });

    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
      mapRef.current.off("move", scheduleCenterAndZoomUpdate);
      mapRef.current.off("zoom", scheduleCenterAndZoomUpdate);
      mapRef.current.remove();
    };
  }, [center, zoom, points]);

  return (
    <>
      <div id="tipmap" className="map-container" ref={mapContainerRef} />
    </>
  );
}
