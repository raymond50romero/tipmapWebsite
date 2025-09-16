import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useHelper } from "../../../globals/helper/helperContext.jsx";
import LoginForm from "../../../features/auth/login/loginForm.jsx";
import CreatAccountForm from "../../../features/auth/createAccount/createAccountForm.jsx";
import ForgotPasswordForm from "../../../features/auth/forgotPassword/forgotPasswordForm.jsx";

export default function HandleAuthForm({
  setGoBack,
  setHeader,
  setIsLoggedIn,
  status,
  setStatus,
  setClose,
}) {
  const [serverResponse, setServerResponse] = useState();
  const [helper, setHelper] = useState();
  const showHelper = useHelper();

  useEffect(() => {
    if (helper) {
      showHelper(helper);
    } else if (serverResponse) {
      showHelper(serverResponse.data);
      setClose(true);
    }

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
  }, [
    helper,
    showHelper,
    serverResponse,
    status,
    setHeader,
    setGoBack,
    setClose,
  ]);

  switch (status) {
    case "createAccount":
      return (
        <CreatAccountForm
          setStatus={setStatus}
          setServerResponse={setServerResponse}
          setHelper={setHelper}
        />
      );
    case "forgotPassword":
      return (
        <ForgotPasswordForm
          setStatus={setStatus}
          setServerResponse={setServerResponse}
          setHelper={setHelper}
        />
      );
    default:
      return (
        <LoginForm
          setStatus={setStatus}
          setIsLoggedIn={setIsLoggedIn}
          setServerResponse={setServerResponse}
          setHelper={setHelper}
        />
      );
  }
}

HandleAuthForm.propTypes = {
  setGoBack: PropTypes.func.isRequired,
  setHeader: PropTypes.func.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
  setClose: PropTypes.func,
};
