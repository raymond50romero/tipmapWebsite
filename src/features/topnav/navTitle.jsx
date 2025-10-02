import React, { useState } from "react";

import { useContentStatus } from "../../globals/contentStatus.jsx";
import "./styles.css";

export default function NavTitle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("Tipmap");
  const { setContentStatus, contentStatus } = useContentStatus();

  function handleNavigation(destination) {
    setContentStatus(destination);
    setIsMenuOpen(false);
  }

  return (
    <nav
      className="topnav-title-menu"
      onMouseEnter={() => {
        setIsMenuOpen(true);
      }}
      onMouseLeave={() => {
        setIsMenuOpen(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsMenuOpen(false);
        }
      }}
    >
      <button
        id="title"
        type="button"
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        onFocus={() => {
          setIsMenuOpen(true);
        }}
      >
        {currentTitle}
        <span className={`topnav-dropdown-icon${isMenuOpen ? " open" : ""}`}>
          ▾
        </span>
      </button>
      <div className={`topnav-dropdown${isMenuOpen ? " show" : ""}`}>
        <button
          type="button"
          className={`topnav-dropdown-item${contentStatus === "tipmap" ? " active" : ""}`}
          onClick={() => {
            handleNavigation("tipmap");
            setCurrentTitle("Tipmap");
          }}
        >
          Tipmap
        </button>
        <button
          type="button"
          className={`topnav-dropdown-item${contentStatus === "posts" ? " active" : ""}`}
          onClick={() => {
            handleNavigation("posts");
            setCurrentTitle("Posts");
          }}
        >
          Posts
        </button>
      </div>
    </nav>
  );
}
