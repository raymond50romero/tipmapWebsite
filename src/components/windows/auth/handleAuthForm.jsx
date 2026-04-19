import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useHelper } from "../../../contexts/helperContext.jsx";
import LoginForm from "../../../features/auth/login/loginForm.jsx";
import CreatAccountForm from "../../../features/auth/createAccount/createAccountForm.jsx";
import ForgotPasswordForm from "../../../features/auth/forgotPassword/forgotPasswordForm.jsx";

export default function HandleAuthForm({
  setGoBack,
  setHeader,
  status,
  setStatus,
  setClose,
}) {
  const showHelper = useHelper();

  useEffect(() => {
    switch (status) {
      case "createAccount":
        setHeader("Create Account");
        setGoBack(true);
        break;
      case "forgotPassword":
        setHeader("Forgot Password");
        setGoBack(true);
        break;
      default:
        setHeader("Login");
        setGoBack(false);
        break;
    }
  }, [showHelper, status, setHeader, setGoBack]);

  switch (status) {
    case "createAccount":
      return (
        <CreatAccountForm
          setStatus={setStatus}
          setClose={setClose}
          setHelper={showHelper}
        />
      );
    case "forgotPassword":
      return (
        <ForgotPasswordForm
          setStatus={setStatus}
          setClose={setClose}
          setHelper={showHelper}
        />
      );
    default:
      return (
        <LoginForm
          setStatus={setStatus}
          setClose={setClose}
          setHelper={showHelper}
        />
      );
  }
}

HandleAuthForm.propTypes = {
  setGoBack: PropTypes.func.isRequired,
  setHeader: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
  setClose: PropTypes.func,
};
