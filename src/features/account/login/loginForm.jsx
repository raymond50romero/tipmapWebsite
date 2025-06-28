import React, { useState, useEffect } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import doLogin from '../api/doLogin.jsx';

import './formStyles.css';

export default function LoginForm({ setDidLogin, setCloseWindowLogin }) {
  const [emailOrUser, setEmailOrUser] = useState();
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
    if (emailOrUser && password) {
      loginButton.style.backgroundColor = '#33f';
      loginButton.style.color = 'white';
      loginButton.style.cursor = 'pointer';
    } else {
      loginButton.style.backgroundColor = '#eee';
      loginButton.style.color = 'black';
      loginButton.style.cursor = 'default';
    }
  }, [emailOrUser, password]);

  return (
    <form
      id="login-form-container"
      onSubmit={async (e) => {
        e.preventDefault();
        if (await doLogin(emailOrUser, password)) {
          setDidLogin(true);
          setCloseWindowLogin(true);
        } else {
          setDidLogin(false);
          setCloseWindowLogin(false);
        }
      }}
    >
      <input
        type="text"
        placeholder="Email or Username"
        id="login-email-field"
        className="input-field"
        onChange={(event) => {
          setEmailOrUser(event.target.value);
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
      <button id="login-window-button" className="login-button">
        Log In
      </button>
    </form>
  );
}
