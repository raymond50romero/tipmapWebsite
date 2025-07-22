import React, { useState } from "react";
import PropTypes from "prop-types";

import useHelper from "../helper/helperContext.jsx";
import LoginForm from "../../features/auth/login/loginForm.jsx";
import CreatAccountForm from "../../features/auth/createAccount/createAccountForm.jsx";
import ForgotPasswordForm from "../../features/auth/forgotPassword/forgotPasswordForm.jsx";

export default function HandleAuthForm({ setHeader, setIsLoggedIn }) {
  const [didLogin, setDidLogin] = useState();
  const [status, setStatus] = useState();
  const [serverResponse, setServerResponse] = useState();

  switch (status) {
    case "createAccount":
      setHeader("Create Account");
      return <CreatAccountForm />;
    case "forgotPassword":
      setHeader("Forgot Password");
      return <ForgotPasswordForm />;
    default:
      setHeader("Login");
      return (
        <LoginForm
          setDidLogin={setDidLogin}
          setServerResponse={setServerResponse}
        />
      );
  }
}

HandleAuthForm.propTypes = {
  setHeader: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.bool.isRequired,
  setHelp: PropTypes.string.isRequired,
};
