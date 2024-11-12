'use client';
import React, { useState } from 'react';

import styles from './styles.module.css';
import {
  CloseOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';

export default function LoginWindow() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className={styles.popupWindow}>
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
      <div className="flex h-[80%] flex-col">
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-black"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <div id="password-container">
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}
