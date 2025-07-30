import React, { useState } from "react";
import PropTypes from "prop-types";

import EmailPasscodeForm from "./emailPasscodeForm.jsx";
import ChangePasswordForm from "./changePasswordForm.jsx";

export default function ForgotPasswordForm({
  setStatus,
  setServerResponse,
  setHelper,
}) {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      {emailSent ? (
        <ChangePasswordForm
          setStatus={setStatus}
          setServerResponse={setServerResponse}
          setHelper={setHelper}
        />
      ) : (
        <EmailPasscodeForm
          setEmailSent={setEmailSent}
          setServerResponse={setServerResponse}
          setHelper={setHelper}
        />
      )}
    </>
  );
}

ForgotPasswordForm.propTypes = {
  setStatus: PropTypes.any,
  setServerResponse: PropTypes.any,
  setHelper: PropTypes.any,
};
