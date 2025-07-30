import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

import "./styles.css";

export default function LoginButton({ didLogin }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function LoggedIn() {
    return (
      <div className="login-buttons-container">
        <button className="topnav-buttons">Profile</button>
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
  return <div>{isLoggedIn ? <LoggedIn /> : <NoLogin />}</div>;
}

LoginButton.propTypes = {
  didLogin: PropTypes.bool.isRequired,
};
