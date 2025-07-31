import React from "react";

import { useContentStatus } from "../../globals/contentStatus/contentStatus.jsx";

import "./style.css";

export default function SideNav() {
  const { setContentStatus } = useContentStatus();

  return (
    <div id="sidenav-container">
      <section id="sidenav-main-container">
        <button
          className="sidenav-button"
          onClick={() => {
            setContentStatus("tipmap");
          }}
        >
          Tip map
        </button>
        <button
          className="sidenav-button"
          onClick={() => {
            setContentStatus("restaurant");
          }}
        >
          Restaurants
        </button>
        <button
          className="sidenav-button"
          onClick={() => {
            setContentStatus("city");
          }}
        >
          Cities
        </button>
        <button
          className="sidenav-button"
          onClick={() => {
            setContentStatus("latest");
          }}
        >
          Latest Posts
        </button>
      </section>
      <section id="sidenav-secondary-container">
        still deciding what goes here, (like history or nav between different
        sections like community help and/or finding a job)
      </section>
      <section id="sidenav-settings-container">
        general settings go here
      </section>
    </div>
  );
}
