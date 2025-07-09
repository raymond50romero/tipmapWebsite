import React, { useMemo, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import LoginForm from './loginForm';
import { useHelper } from '../../../components/helper/helperContext.jsx';

import './styles.css';

export default function LoginWindow({ setDidLogin }) {
  const [closeWindowLogin, setCloseWindowLogin] = useState(false);
  const [serverResponse, setServerResponse] = useState();
  const [helper, setHelper] = useState();
  const showHelper = useHelper();

  function closeWindow() {
    const loginWindow = document.getElementById('login-popup-window');
    const blurBackground = document.getElementById('blur-background');

    if (loginWindow && blurBackground) {
      loginWindow.style.display = 'none';
      blurBackground.style.display = 'none';
    }
  }

  useMemo(() => {
    if (helper) {
      showHelper(helper);
    }
    if (closeWindowLogin) {
      closeWindow();
      showHelper('Login Successful!');
    }
    if (serverResponse) {
      if (serverResponse.status !== 200) {
        showHelper(serverResponse.response.data);
      }
    }
  }, [closeWindowLogin, showHelper, serverResponse, helper]);

  return (
    <div id="login-popup-window">
      <section id="login-popup-window-section">
        <div id="login-window-header-container">
          <h3 className="window-header">Log In</h3>
          <CloseOutlined
            id="close-outline"
            onClick={() => {
              closeWindow();
            }}
          />
        </div>
        <LoginForm
          setDidLogin={setDidLogin}
          setCloseWindowLogin={setCloseWindowLogin}
          setServerResponse={setServerResponse}
          setHelper={setHelper}
        />
      </section>
    </div>
  );
}
