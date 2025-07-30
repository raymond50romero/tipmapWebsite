import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  setError,
  setNormal,
  setButtonClick,
  setButtonGrey,
} from "../../../utils/setHelperColors.jsx";
import { useHelper } from "../../../components/helper/helperContext.jsx";
import "./style.css";

export default function EmailPasscodeForm({
  setEmailSent,
  setServerResponse,
  setHelper,
}) {
  const [email, setEmail] = useState();
  const showHelper = useHelper();

  useEffect(() => {
    if (email) {
      setButtonClick("forgot-password-button");
    } else {
      setButtonGrey("forgot-password-button");
    }
  }, [email]);

  return (
    <section className="reset-password-inner-container">
      <h4 className="reset-password-description">
        Enter your email to send a one time passcode
      </h4>
      <form
        className="reset-password-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!email) {
            setError("forgot-password-email-field");
            showHelper("Input valid email");
          }
        }}
      >
        <input
          type="email"
          placeholder="Enter email"
          id="forgot-password-email-field"
          className="input-field"
          onChange={(event) => {
            setEmail(event.target.value);
            setNormal("forgot-password-email-field");
          }}
        />
        <div className="forgot-password-center-container">
          <button id="forgot-password-button" className="login-button">
            Send Email
          </button>
        </div>
      </form>
    </section>
  );
}

EmailPasscodeForm.propTypes = {
  setEmailSent: PropTypes.any,
  setServerResponse: PropTypes.any,
  setHelper: PropTypes.any,
};
