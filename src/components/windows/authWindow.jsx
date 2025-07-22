import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import HandleAuthForm from "./handleAuthForm.jsx";
import "./style.css";

export default function AuthWindow({ setIsLoggedIn }) {
  const [header, setHeader] = useState();
  const [goBack, setGoBack] = useState(false);

  function closeWindow() {
    const authWindow = document.getElementById("auth-window");
    if (authWindow) {
      authWindow.style.display = "none";
    }
  }

  // TODO set go back arrow properly
  return (
    <section id="auth-window">
      <div id="auth-window-header">
        <h3>{header}</h3>
        <CloseOutlined
          className="close-outline"
          onClick={() => {
            closeWindow();
          }}
        />
      </div>
      <section>
        <HandleAuthForm
          setGoBack={setGoBack}
          setHeader={setHeader}
          setIsLoggedIn={setIsLoggedIn}
        />
      </section>
    </section>
  );
}

AuthWindow.propTypes = {
  setIsLoggedIn: PropTypes.bool.isRequired,
};
