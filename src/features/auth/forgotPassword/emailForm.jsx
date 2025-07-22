import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  setError,
  setNormal,
  setButtonClick,
  setButtonGrey,
} from '../../utils/setHelperColors.jsx';
import { useHelper } from '../../components/helper/helperContext.jsx';
import './style.css';

export default function EmailForm({ setEmailSent }) {
  const [email, setEmail] = useState();
  const showHelper = useHelper();

  useEffect(() => {
    if (email) {
      setButtonClick('forgot-password-button');
    } else {
      setButtonGrey('forgot-password-button');
    }
  }, [email]);

  return (
    <section className="reset-password-inner-container">
      <h1 className="reset-password-header">Forgot Your Password?</h1>
      <h3 className="reset-password-description">
        Enter your email to reset your password
      </h3>
      <form
        className="reset-password-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!email) {
            setError('forgot-password-email-field');
            showHelper('Input valid email');
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
            setNormal('forgot-password-email-field');
          }}
        />
        <div className="forgot-password-center-container">
          <button id="forgot-password-button" className="login-button">
            Send Email
          </button>
        </div>
        <div className="forgot-password-center-container">
          <Link to="/" id="forgot-password-go-back">
            {' '}
            &#60; Back to Main page
          </Link>
        </div>
      </form>
    </section>
  );
}
