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
import { useLoginStatus } from "../../../globals/loginStatus.jsx";
import { useProfileStatus } from "../../../globals/profileStatus.jsx";
import "./style.css";

export default function LoginForm({ setStatus, setClose, setHelper }) {
  const [emailOrUser, setEmailOrUser] = useState();
  const [password, setPassword] = useState();
  const [visible, setVisible] = useState(false);
  const { setLoginStatus } = useLoginStatus();
  const { setProfileStatus } = useProfileStatus();

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
          setHelper("Email/Username required");
        } else if (!password) {
          setError("login-password-field");
          setHelper("Password required");
        }
        const serverResponse = await doLogin(emailOrUser, password);
        if (serverResponse.status === 200) {
          setHelper(serverResponse.data.message);
          setLoginStatus(true);
          setClose(true);
          console.log("this is server response", serverResponse.data.payload);
          setProfileStatus((prev) => ({
            ...prev,
            username: serverResponse.data.payload.username,
            email: serverResponse.data.payload.email,
            occupation: serverResponse.data.payload.occupations,
          }));
        } else {
          setLoginStatus(false);
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
          setStatus("forgotPassword");
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
            setStatus("createAccount");
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
  setStatus: PropTypes.func.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  setClose: PropTypes.func.isRequired,
  setHelper: PropTypes.func.isRequired,
};
