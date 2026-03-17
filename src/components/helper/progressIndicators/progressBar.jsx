import React from 'react';

import './styles.css';

export default function ProgressBar({ barColor, duration }) {
  return (
    <div id="progress-bar-container">
      <div id="progress-bar-inner-container">
        <span id="progress-bar" />
      </div>
    </div>
  );
}
