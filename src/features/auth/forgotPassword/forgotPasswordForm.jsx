import React, { useState } from "react";

import EmailForm from "./emailForm.jsx";
import ChangePasswordForm from "./changePasswordForm.jsx";

export default function ForgotPasswordForm() {
  const [emailSent, setEmailSent] = useState();

  return (
    <>
      {emailSent ? (
        <EmailForm setEmailSent={setEmailSent} />
      ) : (
        <ChangePasswordForm />
      )}
    </>
  );
}
