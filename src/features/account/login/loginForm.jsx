import React, { useState, useEffect } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import doLogin from './doLogin';

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

  useEffect(() => {
    const loginButton = document.getElementById('login-window-button');
    if (email && password) {
      loginButton.style.backgroundColor = '#33f';
      loginButton.style.color = 'white';
      loginButton.style.cursor = 'pointer';
    } else {
      loginButton.style.backgroundColor = '#eee';
      loginButton.style.color = 'black';
      loginButton.style.cursor = 'default';
    }
  }, [email, password]);

  return (
    <form
      id="login-form-container"
      onSubmit={(e) => {
        e.preventDefault();
        doLogin(email, password);
      }}
    >
      <input
        type="email"
        placeholder="Email"
        id="login-email-field"
        className="input-field"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <div className="password-container">
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className="input-field password-field"
          id="login-password-field"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
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
      <div id="helper-message" />
      <button id="login-window-button" className="login-button">
        Log In
      </button>
    </form>
  );
}
