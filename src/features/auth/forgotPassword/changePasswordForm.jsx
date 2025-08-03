import React, { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import {
  setError,
  setNormal,
  setButtonClick,
  setButtonGrey,
} from "../../../utils/setHelperColors.jsx";
import "./style.css";

export default function ChangePasswordForm({
  setStatus,
  setServerResponse,
  setHelper,
}) {
  const [passcode, setPasscode] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const [visible, setVisible] = useState(false);

  return (
    <section className="reset-password-inner-container">
      <h4 className="reset-password-description">
        enter one time passcode from email along with new password
      </h4>
      <form className="reset-password-form">
        <input
          type="text"
          placeholder="One time passcode"
          id="passcode"
          className="input-field password-field"
          onChange={(event) => {
            setPasscode(event.target.value);
          }}
        />
        <div className="password-container">
          <input
            type={visible ? "text" : "password"}
            placeholder="New Password"
            className="input-field password-field"
            id="create-password-field"
            onChange={(event) => {
              setNewPassword(event.target.value);
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
            placeholder="Confirm New Password"
            className="input-field password-field"
            id="create-confirm-password-field"
            onChange={(event) => {
              setConfirmNewPassword(event.target.value);
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
        <button className="login-button">Set new password</button>
      </form>
    </section>
  );
}

ChangePasswordForm.propTypes = {
  setStatus: PropTypes.func.isRequired,
  setServerResponse: PropTypes.func.isRequired,
  setHelper: PropTypes.func.isRequired,
};
