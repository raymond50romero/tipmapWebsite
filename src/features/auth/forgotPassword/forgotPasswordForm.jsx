import { useState } from "react";
import PropTypes from "prop-types";

import EmailPasscodeForm from "./emailPasscodeForm.jsx";
import ChangePasswordForm from "./changePasswordForm.jsx";

export default function ForgotPasswordForm({
  setStatus,
  setClose,
  setHelper,
  setWindowClosed,
}) {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      {emailSent ? (
        <ChangePasswordForm
          setStatus={setStatus}
          setClose={setClose}
          setHelper={setHelper}
          setWindowClosed={setWindowClosed}
        />
      ) : (
        <EmailPasscodeForm
          setEmailSent={setEmailSent}
          setClose={setClose}
          setHelper={setHelper}
          setWindowClosed={setWindowClosed}
        />
      )}
    </>
  );
}

ForgotPasswordForm.propTypes = {
  setStatus: PropTypes.func.isRequired,
  setClose: PropTypes.func.isRequired,
  setHelper: PropTypes.func.isRequired,
  setWindowClosed: PropTypes.func.isRequired,
};
