import React, { useState } from "react";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import HandleAuthForm from "./handleAuthForm.jsx";
import "./style.css";

export default function AuthWindow({ setIsLoggedIn }) {
  const [header, setHeader] = useState();
  const [goBack, setGoBack] = useState(false);
  const [status, setStatus] = useState("login");

  function closeWindow() {
    const authWindow = document.getElementById("auth-window");
    const blurBackground = document.getElementById("blur-background");
    if (authWindow) {
      setStatus("login");
      authWindow.style.display = "none";
      blurBackground.style.display = "none";
    }
  }

  return (
    <section id="auth-window">
      <div id="auth-window-header-container">
        <h3 id="auth-window-header">{header}</h3>
        <div id="auth-window-header-buttons-container">
          {goBack ? (
            <LeftOutlined
              className="auth-window-header-buttons"
              onClick={() => {
                setStatus("login");
              }}
            />
          ) : (
            ""
          )}
          <CloseOutlined
            className="auth-window-header-buttons"
            onClick={() => {
              closeWindow();
            }}
          />
        </div>
      </div>
      <>
        <HandleAuthForm
          setGoBack={setGoBack}
          setHeader={setHeader}
          setIsLoggedIn={setIsLoggedIn}
          status={status}
          setStatus={setStatus}
        />
      </>
    </section>
  );
}

AuthWindow.propTypes = {
  setIsLoggedIn: PropTypes.bool.isRequired,
};
