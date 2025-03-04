import React, { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import './formStyles.css';

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [visible, setVisible] = useState(false);

  function openCreateAccount() {
    const caWindow = document.getElementById('create-account-popup-window');
    const blurBackground = document.getElementById('blur-background');

    if (caWindow && blurBackground) {
      caWindow.style.display = 'block';
      blurBackground.style.display = 'block';
    }
  }

  return (
    <div id="login-form-container">
      <input
        type="email"
        placeholder="Email"
        id="email-field"
        className="input-field"
      />
      <div className="password-container">
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className="input-field password-field"
        />
        {visible ? (
          <EyeOutlined
            className="eye-outline"
            onClick={() => {
              setVisible(!visible);
            }}
          />
        ) : (
          <EyeInvisibleOutlined
            className="eye-outline"
            onClick={() => {
              setVisible(!visible);
            }}
          />
        )}
      </div>
      <p id="forgot-password-link" className="link">
        Forgot password?
      </p>
      <p id="new-user-message">
        New user?{' '}
        <span
          id="create-account-link"
          className="link"
          onClick={() => {
            openCreateAccount();
          }}
        >
          Create Account
        </span>
      </p>
      <button className="login-button">Log In</button>
    </div>
  );
}
