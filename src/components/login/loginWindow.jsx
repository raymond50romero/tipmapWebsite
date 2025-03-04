import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

import LoginForm from './loginForm';

import './styles.css';

export default function LoginWindow() {
  function closeWindow() {
    const loginWindow = document.getElementById('login-popup-window');
    const blurBackground = document.getElementById('blur-background');

    if (loginWindow && blurBackground) {
      loginWindow.style.display = 'none';
      blurBackground.style.display = 'none';
    }
  }

  return (
    <div id="login-popup-window">
      <section id="login-popup-window-section">
        <div id="login-window-header-container">
          <h3 className="window-header">Log In</h3>
          <CloseOutlined
            id="close-outline"
            onClick={() => {
              closeWindow();
            }}
          />
        </div>
        <LoginForm />
      </section>
    </div>
  );
}
