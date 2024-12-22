import React, { useState } from 'react';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

export default function EmailPasswordContainer({
  setEmail,
  setPassword,
  setRemember,
  remember,
}: {
  setEmail: any;
  setPassword: any;
  setRemember: any;
  remember: boolean;
}) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2">
      <div>
        <span>
          New user?{' '}
          <a href="/create-account" className="text-hyperlink">
            Create an account
          </a>
        </span>
      </div>
      <input
        type="email"
        placeholder="Email"
        className="border-[1px] border-[#ccc] p-2 rounded-[16px]"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
      />
      <div id="passwordContainer" className="w-[100%] relative">
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className={styles.passwordField}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        {visible ? (
          <EyeOutlined
            className={styles.visibleIcon}
            onClick={() => setVisible(!visible)}
          />
        ) : (
          <EyeInvisibleOutlined
            className={styles.visibleIcon}
            onClick={() => setVisible(!visible)}
          />
        )}
      </div>
      <a href="/recover-account" className="text-hyperlink">
        Forgot Password?
      </a>
    </div>
  );
}
