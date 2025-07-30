import React, { useState, useEffect } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Select } from "antd";
import PropTypes from "prop-types";

import doCreate from "../api/doCreate.jsx";
import {
  setError,
  setNormal,
  setButtonClick,
  setButtonGrey,
} from "../../../utils/setHelperColors.jsx";
import "./style.css";

export default function CreateAccountForm({
  setStatus,
  setServerResponse,
  setHelper,
}) {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [occupation, setOccupation] = useState();
  const [other, setOther] = useState();
  const [visible, setVisible] = useState(false);

  const options = [
    {
      label: "Bartender",
      value: "bartender",
    },
    {
      label: "Server",
      value: "server",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  useEffect(() => {
    if (userName && email && password && confirmPassword) {
      setButtonClick("create-account-button");
    } else {
      setButtonGrey("create-account-button");
    }
  }, [userName, email, password, confirmPassword, occupation]);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!email) {
          setHelper("Email needed");
          setError("create-email-field");
        } else if (!userName) {
          setHelper("Username needed");
          setError("create-username-field");
        } else if (!password) {
          setHelper("Password needed");
          setError("create-password-field");
        } else if (!confirmPassword) {
          setHelper("Confirm password needed");
          setError("create-confirm-password-field");
        } else if (password !== confirmPassword) {
          setHelper("Passwords do not match");
          setError("create-password-field");
          setError("create-confirm-password-field");
        } else if (!occupation) {
          setHelper("Occupation needed");
          setError("create-set-occupation-field");
        } else {
          const serverResponse = await doCreate(
            email,
            userName,
            password,
            confirmPassword,
            occupation,
            other,
          );
          if (serverResponse.status === 200) {
            setHelper("Account Created!");
            setStatus("login");
          }
          setServerResponse(serverResponse);
        }
      }}
      id="ca-form-container"
    >
      <input
        type="email"
        placeholder="Email"
        className="input-field"
        id="create-email-field"
        onChange={(event) => {
          setEmail(event.target.value);
          setNormal("create-email-field");
        }}
      />
      <input
        type="text"
        placeholder="Username"
        className="input-field"
        id="create-username-field"
        onChange={(event) => {
          setUserName(event.target.value);
          setNormal("create-username-field");
        }}
      />
      <div className="password-container">
        <input
          type={visible ? "text" : "password"}
          placeholder="Password"
          className="input-field password-field"
          id="create-password-field"
          onChange={(event) => {
            setPassword(event.target.value);
            setNormal("create-password-field");
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
      <div className="password-container">
        <input
          type={visible ? "text" : "password"}
          placeholder="Confirm Password"
          className="input-field password-field"
          id="create-confirm-password-field"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            setNormal("create-confirm-password-field");
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
      <div>
        <h6>Select Occupation(s)</h6>
        <Select
          id="create-select-occupation-field"
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Select..."
          onChange={(event) => {
            if (event.includes("other")) {
              document.getElementById("other-found-input").style.display =
                "block";
            } else {
              document.getElementById("other-found-input").style.display =
                "none";
            }
            setOccupation(event);
            setNormal("create-select-occupation-field");
          }}
          options={options}
        />
      </div>
      <input
        id="other-found-input"
        className="input-field"
        placeholder="Specify other..."
        onChange={(event) => {
          setOther(event.target.value);
        }}
      />
      <button id="create-account-button" className="login-button">
        Create Account
      </button>
    </form>
  );
}

CreateAccountForm.propTypes = {
  setStatus: PropTypes.string.isRequired,
  setDidCreate: PropTypes.bool.isRequired,
  setServerResponse: PropTypes.any.isRequired,
  setHelper: PropTypes.string.isRequired,
};
