import React from "react";
import PropTypes from "prop-types";

import ProgressBar from "./progressIndicators/progressBar.jsx";
import "./style.css";

export default function HelperMessage({ message, visible }) {
  return (
    <div id="helper-message-container" className={visible ? "show" : ""}>
      <div id="helper-message">{message}</div>
    </div>
  );
}

HelperMessage.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};
