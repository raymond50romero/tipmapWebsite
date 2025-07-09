import React from 'react';

import ProgressBar from '../progressIndicators/progressBar.jsx';
import './style.css';

export default function HelperMessage({ message, visible }) {
  return (
    <div id="helper-message-container" className={visible ? 'show' : ''}>
      <div id="helper-message">{message}</div>
    </div>
  );
}
