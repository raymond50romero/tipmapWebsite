import React from 'react';
import LoginButton from '../../features/account/login/loginButton';
import LoginWindow from '../../features/account/login/loginWindow';
import CreateAccountWindow from '../../features/account/createAccount/createAccountWindow';

import './styles.css';

export default function TopNav() {
  return (
    <div id="topnav-container">
      <h1 id="title">Server Tips</h1>
      <input placeholder="Search" id="search-bar" />
      <LoginButton />
      <LoginWindow />
      <CreateAccountWindow />
    </div>
  );
}
