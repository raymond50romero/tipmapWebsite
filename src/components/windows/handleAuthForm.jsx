import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import useHelper from "../helper/helperContext.jsx";
import LoginForm from "../../features/auth/login/loginForm.jsx";
import CreatAccountForm from "../../features/auth/createAccount/createAccountForm.jsx";
import ForgotPasswordForm from "../../features/auth/forgotPassword/forgotPasswordForm.jsx";

export default function HandleAuthForm({
  setGoBack,
  setHeader,
  setIsLoggedIn,
}) {
  const [status, setStatus] = useState();
  const [serverResponse, setServerResponse] = useState();
  const [helper, setHelper] = useState();
  const showHelper = useHelper();

  useEffect(() => {
    if (helper) {
      showHelper(helper);
    }
    if (serverResponse) {
      showHelper(serverResponse.response.data);
    }
  }, [helper, showHelper, serverResponse]);

  switch (status) {
    case "createAccount":
      setHeader("Create Account");
      setGoBack(true);
      return (
        <CreatAccountForm
          setStatus={setStatus}
          setServerResponse={setServerResponse}
          setHelper={setHelper}
        />
      );
    case "forgotPassword":
      setHeader("Forgot Password");
      setGoBack(true);
      return <ForgotPasswordForm />;
    default:
      setHeader("Login");
      setGoBack(false);
      return (
        <LoginForm
          setStatus={setStatus}
          setIsLoggedIn={setIsLoggedIn}
          setServerResponse={setServerResponse}
        />
      );
  }
}

HandleAuthForm.propTypes = {
  setGoBack: PropTypes.bool.isRequired,
  setHeader: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.bool.isRequired,
};
