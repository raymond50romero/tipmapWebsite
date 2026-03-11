import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { useHelper } from "../../globals/helper/helperContext.jsx";
import { useUserLongLat } from "../../globals/userLongLat.jsx";
import { useMapState } from "../../globals/mapState.jsx";
import { getPosts } from "../../features/tipmap/api/getPosts.jsx";
import organizeWeights from "../../features/tipmap/organizeWeights.jsx";
import RestaurantPopup from "./restaurantPopup.jsx";
import "./styles.css";

const MAPBOXGL_TOKEN = import.meta.env.VITE_MAP_TOKEN;
const INITIAL_CENTER = [-117.1598199, 32.713659];
const INITIAL_ZOOM = 12.5;
const INTERACTION_DEBOUNCE_MS = 1000;
const CENTER_DELTA_THRESHOLD = 0.025;
const ZOOM_DELTA_THRESHOLD = 0.5;

// demo points for testing
// San Diego long, lat: -117.2096543, 32.8577702
// Tacos El Gordo long, lat: 32.713659878220476, -117.15981993970202
// Petco Park long, lat: -117.15704, 32.70767
// Seaport Village long, lat: -117.17093, 32.70923

export default function Tipmap() {
  // utils needed for map
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const interactionTimeoutRef = useRef();
  const lastFetchedParamsRef = useRef({
    center: INITIAL_CENTER,
    zoom: INITIAL_ZOOM,
  });
  const selectedPinRef = useRef(null);

  // global variable to get users current longitude and latitude
  const { setUserLongLat } = useUserLongLat();
  const { setMapCenter, searchedPlace, setClickedRestaurant } = useMapState();

  // data points given by the backend
  const [points, setPoints] = useState(null);

  // center and zoom to both calculate current and what to send to the backend
  const [currCenter, setCurrCenter] = useState();
  const [currZoom, setCurrZoom] = useState(INITIAL_ZOOM);
  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  // to grab map details so that we know how far to look out
  const [northEast, setNorthEast] = useState();
  const [southWest, setSouthWest] = useState();

  // helper popup
  const setHelper = useHelper();

  // load all of the points on the map
  useEffect(() => {
    if (!currCenter || currCenter.length !== 2 || currZoom === undefined) {
      return;
    }

    async function fetchPosts() {
      if (!currCenter || !currZoom || !northEast || !southWest) return;
      const rawPoints = await getPosts(
        currCenter,
        currZoom,
        northEast,
        southWest,
      );
      if (!rawPoints) {
        console.log("no points found", rawPoints);
        return false;
      }
      setPoints(organizeWeights(rawPoints.data.weightsData, "weekdayWeight"));
      lastFetchedParamsRef.current = {
        center: [...currCenter],
        zoom: currZoom,
      };
      console.log("this is points after setting: ", points);
    }
    fetchPosts();
  }, [currCenter, currZoom]);

  // set users location, default to San Diego if user does
  // not want to share location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        setCenter(userLocation);
        setCurrCenter(userLocation);
        setHelper("position set to your location");
        setUserLongLat(userLocation);
        lastFetchedParamsRef.current = {
          center: userLocation,
          zoom: INITIAL_ZOOM,
        };
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

    // Initialize the global map center
    setMapCenter(center);

    // update zoom and center that is sent to backend whenever it passes a certain threshold
    function updateCenterAndZoom() {
      const newCenter = mapRef.current.getCenter().toArray();
      const newZoom = mapRef.current.getZoom();
      const { center: lastCenter, zoom: lastZoom } =
        lastFetchedParamsRef.current;

      // get the bounds of the visible map to get all of the posts within the bounds
      setNorthEast(mapRef.current.getBounds().getNorthEast().toArray());
      setSouthWest(mapRef.current.getBounds().getSouthWest().toArray());

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

    mapRef.current.on("move", () => {
      scheduleCenterAndZoomUpdate();
    });
    mapRef.current.on("zoom", () => {
      scheduleCenterAndZoomUpdate();
    });

    mapRef.current.on("move", () => {
      updateCenterAndZoom();
    });

    mapRef.current.on("moveend", () => {
      setMapCenter(mapRef.current.getCenter().toArray());
      console.log("new map center", mapRef.current.getCenter().toArray());
    });

    mapRef.current.on("click", (e) => {
      const features = mapRef.current.queryRenderedFeatures(e.point);

      // Clear existing selected pin if any
      if (selectedPinRef.current) {
        selectedPinRef.current.remove();
        selectedPinRef.current = null;
      }

      // Find a POI feature if clicked
      let restaurantName;
      let restaurantAddress;

      if (features.length > 0) {
        restaurantName = features[0].properties.name;
        // Mapbox vector tiles don't always contain full address in poi-label,
        // but we can try to grab what's available or leave it blank
        // features[0].properties often has 'address' or similar fields
        restaurantAddress = features[0].properties.address || "";
      }

      console.log("this is restaurant name: ", restaurantName);
      console.log("this is features: ", features);

      if (restaurantName) {
        setClickedRestaurant(restaurantName);

        // Create a popup container
        const popupNode = document.createElement("div");
        const root = ReactDOM.createRoot(popupNode);

        // Render our React component into the popup
        root.render(
          <RestaurantPopup
            name={restaurantName}
            address={restaurantAddress}
            onLeaveReview={() => {
              // Open the new post window programmatically
              const newPostWindow = document.getElementById("new-post-window");
              const blurBackground = document.getElementById("blur-background");
              if (newPostWindow && blurBackground) {
                newPostWindow.style.display = "block";
                blurBackground.style.display = "block";
              }
            }}
            onSeeReviews={() => {
              console.log("See reviews clicked for", restaurantName);
              // TODO: Implement see reviews logic
            }}
          />,
        );

        // Create the popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setDOMContent(popupNode)
          .setMaxWidth("20rem");

        // Create and add the marker with the popup
        const marker = new mapboxgl.Marker({ color: "#FF0000" }) // Distinct red color
          .setLngLat(e.lngLat)
          .setPopup(popup)
          .addTo(mapRef.current);

        // Open the popup immediately
        marker.togglePopup();

        // Save reference to remove later
        selectedPinRef.current = marker;
      }
    });

    mapRef.current.on("load", () => {
      console.log("map ref current is on load");
      mapRef.current.addSource("hotspots", {
        type: "geojson",
        data: points, // or a URL: 'https://example.com/your-data.geojson'
      });

      // set up heatmap
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
            10,
            12,
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
            "rgba(0,0,0,0)",
            0.2,
            "rgb(0, 0, 90)", // dark blue

            // Main gradient range
            0.3,
            "rgb(0, 0, 255)", // blue
            0.4,
            "rgb(0, 150, 255)", // sky blue
            0.5,
            "rgb(0, 255, 180)", // teal
            0.6,
            "rgb(0, 255, 0)", // green
            0.7,
            "rgb(255, 255, 0)", // yellow
            0.8,
            "rgb(255, 128, 0)", // orange

            1.0,
            "rgb(120, 0, 0)", // dark red
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

      // show points as circles when zoomed in
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
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
      mapRef.current.off("move", scheduleCenterAndZoomUpdate);
      mapRef.current.off("zoom", scheduleCenterAndZoomUpdate);
      mapRef.current.remove();
    };
  }, [center, zoom]);

  useEffect(() => {
    if (!mapRef.current) return;
    const source = mapRef.current.getSource("hotspots");
    if (!source) {
      console.log("no source found");
      return;
    }
    console.log("source found: ", source);
    source.setData(points);
  }, [points]);

  const searchedMarkerRef = useRef(null);

  useEffect(() => {
    if (searchedPlace && mapRef.current) {
      const { longitude, latitude, place_name, text } = searchedPlace;
      const name = text || place_name; // 'text' is usually the short name, 'place_name' is full address

      mapRef.current.flyTo({
        center: [longitude, latitude],
        zoom: 16,
        essential: true,
      });

      // Clear existing selected pin if any
      if (selectedPinRef.current) {
        selectedPinRef.current.remove();
        selectedPinRef.current = null;
      }

      setClickedRestaurant(name);

      // Create a popup container
      const popupNode = document.createElement("div");
      const root = ReactDOM.createRoot(popupNode);

      // Render our React component into the popup
      root.render(
        <RestaurantPopup
          name={name}
          address={place_name}
          onLeaveReview={() => {
            // Open the new post window programmatically
            const newPostWindow = document.getElementById("new-post-window");
            const blurBackground = document.getElementById("blur-background");
            if (newPostWindow && blurBackground) {
              newPostWindow.style.display = "block";
              blurBackground.style.display = "block";
            }
          }}
          onSeeReviews={() => {
            console.log("See reviews clicked for", name);
            // TODO: Implement see reviews logic
          }}
        />,
      );

      // Create the popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setDOMContent(popupNode)
        .setMaxWidth("300px");

      // Create and add the marker with the popup
      const marker = new mapboxgl.Marker({ color: "#FF0000" }) // Distinct red color
        .setLngLat([longitude, latitude])
        .setPopup(popup)
        .addTo(mapRef.current);

      // Open the popup immediately
      marker.togglePopup();

      // Save reference to remove later
      selectedPinRef.current = marker;
    }
  }, [searchedPlace]);

  return (
    <>
      <div id="tipmap" className="map-container" ref={mapContainerRef} />
    </>
  );
}
