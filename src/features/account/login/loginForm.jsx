import React, { useState, useEffect } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import doLogin from '../api/doLogin.jsx';
import {
  setError,
  setNormal,
  setButtonClick,
  setButtonGrey,
} from '../utils/setHelperColors.jsx';

import './formStyles.css';

export default function LoginForm({
  setDidLogin,
  setCloseWindowLogin,
  setServerResponse,
  setHelper,
}) {
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
    if (emailOrUser && password) {
      setButtonClick('login-window-button');
    } else {
      setButtonGrey('login-window-button');
    }
  }, [emailOrUser, password]);

  return (
    <form
      id="login-form-container"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!emailOrUser) {
          setHelper('Need email/username');
          setError('login-email-field');
        } else if (!password) {
          setHelper('Need password');
          setError('login-password-field');
        }
        const serverResponse = await doLogin(emailOrUser, password);
        setServerResponse(serverResponse);
        if (serverResponse.status === 200) {
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
          setNormal('login-email-field');
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
            setNormal('login-password-field');
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
