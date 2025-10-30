import React, { useState } from "react";
import PropTypes from "prop-types";

import EmailPasscodeForm from "./emailPasscodeForm.jsx";
import ChangePasswordForm from "./changePasswordForm.jsx";

export default function ForgotPasswordForm({ setStatus, setClose, setHelper }) {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      {emailSent ? (
        <ChangePasswordForm
          setStatus={setStatus}
          setClose={setClose}
          setHelper={setHelper}
        />
      ) : (
        <EmailPasscodeForm
          setEmailSent={setEmailSent}
          setClose={setClose}
          setHelper={setHelper}
        />
      )}
    </>
  );
}

ForgotPasswordForm.propTypes = {
  setStatus: PropTypes.func.isRequired,
  setClose: PropTypes.func.isRequired,
  setHelper: PropTypes.func.isRequired,
};
