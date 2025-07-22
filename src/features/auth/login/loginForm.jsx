import React, { useState, useEffect } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import doLogin from "../api/doLogin.jsx";
import {
  setError,
  setNormal,
  setButtonClick,
  setButtonGrey,
} from "../../../utils/setHelperColors.jsx";
import "./formStyles.css";

export default function LoginForm({ setIsLoggedIn, setServerResponse }) {
  const [emailOrUser, setEmailOrUser] = useState();
  const [password, setPassword] = useState();
  const [visible, setVisible] = useState(false);

  function openCreateAccount() {
    const caWindow = document.getElementById("create-account-popup-window");
    const blurBackground = document.getElementById("blur-background");

    if (caWindow && blurBackground) {
      caWindow.style.display = "block";
      blurBackground.style.display = "block";
    }
  }

  function openForgotPasswordWindow() {
    const fpWindow = document.getElementById("forgot-password-window");
    if (fpWindow) {
      fpWindow.style.display = "block";
    }
  }

  useEffect(() => {
    if (emailOrUser && password) {
      setButtonClick("login-window-button");
    } else {
      setButtonGrey("login-window-button");
    }
  }, [emailOrUser, password]);

  return (
    <form
      id="login-form-container"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!emailOrUser) {
          setError("login-email-field");
        } else if (!password) {
          setError("login-password-field");
        }
        const serverResponse = await doLogin(emailOrUser, password);
        setServerResponse(serverResponse);
        if (serverResponse.status === 200) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
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
          setNormal("login-email-field");
        }}
      />
      <div className="password-container">
        <input
          type={visible ? "text" : "password"}
          placeholder="Password"
          className="input-field password-field"
          id="login-password-field"
          onChange={(event) => {
            setPassword(event.target.value);
            setNormal("login-password-field");
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
      <p
        id="forgot-password-link"
        className="link"
        onClick={() => {
          openForgotPasswordWindow();
        }}
      >
        Forgot password?
      </p>
      <p id="new-user-message">
        New user?{" "}
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

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.bool.isRequired,
  setServerResponse: PropTypes.any.isRequired,
};
