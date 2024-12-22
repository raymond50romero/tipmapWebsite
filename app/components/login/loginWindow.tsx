'use client';
import React, { useState } from 'react';

import styles from './styles.module.css';
import EmailPasswordContainer from './emailPasswordContainer';
import { CloseOutlined } from '@ant-design/icons';
import doLogin from './doLogin';

export default function LoginWindow({ setIsLoggedIn }: { setIsLoggedIn: any }) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [remember, setRemember] = useState<boolean>(false);

  function closeWindow() {
    document.getElementById('login_popup_window')!.style.display = 'none';
    const blurBackground = document.getElementById('blur-background')!;
    blurBackground.style.position = 'static';
    blurBackground.style.top = '0';
    blurBackground.style.bottom = '0';
    blurBackground.style.right = '0';
    blurBackground.style.left = '0';
    blurBackground.style.zIndex = '0';
    blurBackground.style.backdropFilter = 'none';
  }

  return (
    <div className={styles.popupWindow} id="login_popup_window">
      <div className="flex flex-col h-full justify-between">
        <div className="flex h-[10%] w-full flex-row justify-between">
          <h3 className="flex justify-center items-center text-2xl">Log In</h3>
          <CloseOutlined onClick={() => closeWindow()} />
        </div>
        <div>
          <EmailPasswordContainer
            setEmail={setEmail}
            setPassword={setPassword}
            setRemember={setRemember}
            remember={remember}
          />
        </div>
        <button
          onClick={() => setIsLoggedIn(doLogin(email!, password!, remember!))}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
