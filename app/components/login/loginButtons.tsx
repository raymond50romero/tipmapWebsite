'use client';
import React, { useState } from 'react';

import styles from './styles.module.css';

export default function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function NoLogin() {
    function openWindow() {
      document.getElementById('login_popup_window')!.style.display = 'block';
      const blurBackground = document.getElementById('blur-background')!;
      blurBackground.style.position = 'fixed';
      blurBackground.style.top = '0';
      blurBackground.style.bottom = '0';
      blurBackground.style.right = '0';
      blurBackground.style.left = '0';
      blurBackground.style.zIndex = '100';
      blurBackground.style.backdropFilter = 'blur(1px)';
      blurBackground.style.filter = 'brightness(95%)';
    }

    return (
      <div className={styles.loginButton}>
        <div id="blur-background" />
        <button
          className="italic"
          onClick={() => {
            openWindow();
          }}
        >
          Login
        </button>
      </div>
    );
  }

  function LoggedIn() {
    return (
      <div className="flex h-full w-full justify-center p-4">
        <button>Profile</button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      {isLoggedIn ? <LoggedIn /> : <NoLogin />}
    </div>
  );
}
