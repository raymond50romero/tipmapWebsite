import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import EmailForm from './emailForm.jsx';
import ChangePasswordForm from './changePasswordForm.jsx';
import { useHelper } from '../../components/helper/helperContext.jsx';

import './style.css';

export default function ForgotPasswordWindow() {
  const [emailSend, setEmailSent] = useState(false);

  function closeWindow() {
    const forgotPasswordWindow = document.getElementById(
      'forgot-password-window'
    );
    if (forgotPasswordWindow) {
      forgotPasswordWindow.style.display = 'none';
    }
  }

  return (
    <div id="forgot-password-window">
      <div id="">
        <h3 className="window-header">Forgot Password?</h3>
        <CloseOutlined
          id="close-outline"
          onClick={() => {
            closeWindow();
          }}
        />
      </div>
      {emailSend ? (
        <ChangePasswordForm />
      ) : (
        <EmailForm setEmailSent={setEmailSent} />
      )}
    </div>
  );
}
