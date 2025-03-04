import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import CreateAccountForm from './caForm';

import './caWindow.styles.css';

export default function CreateAccountWindow() {
  function closeWindow() {
    const createAccountPopupWindow = document.getElementById(
      'create-account-popup-window'
    );

    if (createAccountPopupWindow) {
      createAccountPopupWindow.style.display = 'none';
    }
  }

  return (
    <div id="create-account-popup-window">
      <div id="create-account-window-header">
        <h3 className="window-header">Create Account</h3>
        <CloseOutlined
          id="close-outline"
          onClick={() => {
            closeWindow();
          }}
        />
      </div>
      <CreateAccountForm />
    </div>
  );
}
