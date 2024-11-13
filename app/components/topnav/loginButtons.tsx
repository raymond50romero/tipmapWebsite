'use client';
import React, { useState } from 'react';

import styles from './styles.module.css';

export default function LoginButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function NoLogin() {
    function setLogin(event: MouseEvent) {
      event.preventDefault();
      setIsLoggedIn(true);
    }

    return (
      <div className={styles.loginButton}>
        <button
          onClick={(event: MouseEvent) => {
            setLogin(event);
          }}
          className="italic"
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
