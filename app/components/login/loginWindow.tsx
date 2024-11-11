'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import {
  CloseOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';

export default function LoginWindow() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={styles.popupWindow}>
      <div className="flex h-[10%] w-full flex-row justify-between">
        <h3 className="flex justify-center items-center text-2xl">Log In</h3>
        <CloseOutlined />
      </div>
      <div>
        <span>
          New user? <Link to="/create-account">Create new account</Link>
        </span>
      </div>
      <div className="flex h-[80%] flex-col">
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-black"
          onChange={(event) => setEmail(event.target.value)}
        />
        <div id="password-container">
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
