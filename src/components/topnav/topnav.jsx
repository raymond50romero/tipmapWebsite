import React from 'react';
import LoginButton from '../login/loginButton';
import LoginWindow from '../login/loginWindow';
import CreateAccountWindow from '../createAccount/createAccountWindow';

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
