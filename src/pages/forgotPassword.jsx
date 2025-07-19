import React, { useState } from 'react';

import EmailForm from '../features/forgotPassword/emailForm.jsx';
import ChangePasswordForm from '../features/forgotPassword/changePasswordForm.jsx';

import '../index.css';

export default function ForgotPassword() {
  const [emailSend, setEmailSent] = useState(true);

  return (
    <div id="forgot-password-container">
      {emailSend ? (
        <ChangePasswordForm />
      ) : (
        <EmailForm setEmailSent={setEmailSent} />
      )}
    </div>
  );
}
