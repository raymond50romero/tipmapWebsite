import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

import { useContentStatus } from "../../globals/contentStatus.jsx";

import "./styles.css";

export default function LoginButton({ didLogin }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setContentStatus } = useContentStatus();

  function LoggedIn() {
    return (
      <div className="login-buttons-container">
        <button
          className="topnav-buttons"
          onClick={() => {
            setContentStatus("profile");
          }}
        >
          Profile
        </button>
      </div>
    );
  }

  function NoLogin() {
    function openWindow() {
      const authWindow = document.getElementById("auth-window");
      const blurBackground = document.getElementById("blur-background");
      if (authWindow && blurBackground) {
        authWindow.style.display = "block";
        blurBackground.style.display = "block";
      }
    }

    return (
      <div className="login-buttons-container">
        <button
          onClick={() => {
            openWindow();
          }}
          className="topnav-buttons"
        >
          Log In
        </button>
      </div>
    );
  }

  useMemo(() => {
    if (didLogin) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, [didLogin]);
  return <>{isLoggedIn ? <LoggedIn /> : <NoLogin />}</>;
}

LoginButton.propTypes = {
  didLogin: PropTypes.bool.isRequired,
};
