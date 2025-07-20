import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

import useHelper from "../helper/helperContext.jsx";

export default function AuthWindow() {
  const [header, setHeader] = useState("authentication window header");

  function closeWindow() {
    const authWindow = document.getElementById("auth-window");
    if (authWindow) {
      authWindow.style.display = "none";
    }
  }

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
    </section>
  );
}
