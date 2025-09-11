import React from "react";

import { useContentStatus } from "../../globals/contentStatus.jsx";

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
          Map
        </button>
        <button
          className="sidenav-button"
          onClick={() => {
            setContentStatus("posts");
          }}
        >
          Posts
        </button>
      </section>
      <section id="sidenav-secondary-container">
        post filter/map nav will go here
      </section>
      <section id="sidenav-settings-container">
        general settings go here
      </section>
    </div>
  );
}
