import React, { useEffect, useState } from "react";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import HandleAuthForm from "./handleAuthForm.jsx";
import "./style.css";

export default function AuthWindow() {
  const [header, setHeader] = useState();
  const [goBack, setGoBack] = useState(false);
  const [status, setStatus] = useState("login");
  const [close, setClose] = useState(false);

  function closeWindow() {
    const authWindow = document.getElementById("auth-window");
    const blurBackground = document.getElementById("blur-background");
    if (authWindow) {
      setStatus("login");
      authWindow.style.display = "none";
      blurBackground.style.display = "none";
    }
  }

  useEffect(() => {
    if (close) {
      closeWindow();
    }
  });

  return (
    <section className="window" id="auth-window">
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
          status={status}
          setStatus={setStatus}
          setClose={setClose}
        />
      </>
    </section>
  );
}

AuthWindow.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
