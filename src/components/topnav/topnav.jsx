import React, { useState } from 'react';
import LoginButton from '../../features/account/login/loginButton';
import LoginWindow from '../../features/account/login/loginWindow';
import CreateAccountWindow from '../../features/account/createAccount/createAccountWindow';
import ForgotPasswordWindow from '../../features/forgotPassword/forgotPasswordWindow';

import './styles.css';

export default function TopNav() {
  const [didLogin, setDidLogin] = useState(false);

  return (
    <div id="topnav-container">
      <h1 id="title">Server Tips</h1>
      <input placeholder="Search" id="search-bar" />
      <LoginButton didLogin={didLogin} />
      <LoginWindow setDidLogin={setDidLogin} />
      <CreateAccountWindow />
      <ForgotPasswordWindow />
    </div>
  );
}
