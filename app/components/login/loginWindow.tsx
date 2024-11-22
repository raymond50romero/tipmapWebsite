// cspell:ignore subcomponents
'use client';
import React, { useState } from 'react';

import styles from './styles.module.css';
import EmailPasswordContainer from './subcomponents/emailPasswordContainer';
import { CloseOutlined } from '@ant-design/icons';
import doLogin from './doLogin';

export default function LoginWindow() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className={styles.popupWindow}>
      <div className="flex flex-col h-full justify-between">
        <div className="flex h-[10%] w-full flex-row justify-between">
          <h3 className="flex justify-center items-center text-2xl">Log In</h3>
          <CloseOutlined />
        </div>
        <div>
          <span>
            New user?{' '}
            <a href="/create-account" className="text-hyperlink">
              Create a new account
            </a>
          </span>
        </div>
        <EmailPasswordContainer setEmail={setEmail} setPassword={setPassword} />
        <a href="/recover-account" className="text-hyperlink">
          Forgot Password?
        </a>
        <button>Log in</button>
      </div>
    </div>
  );
}
