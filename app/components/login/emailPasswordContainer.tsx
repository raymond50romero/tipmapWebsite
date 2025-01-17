import React, { Dispatch, SetStateAction, useState } from 'react';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

export default function EmailPasswordContainer({
  email,
  password,
}: {
  email: Dispatch<SetStateAction<string>>;
  password: Dispatch<SetStateAction<string>>;
}) {
  const [visible, setVisible] = useState<boolean>(false);

  function openCreateAccountWindow() {
    document.getElementById('create-account-window')!.style.display = 'block';
    document.getElementById('login_popup_window')!.style.display = 'none';
  }

  return (
    <div className="flex flex-col gap-3">
      <div>
        <span>
          New user?{' '}
          <span
            className="text-hyperlink cursor-pointer"
            onClick={() => openCreateAccountWindow()}
          >
            Create an account
          </span>
        </span>
      </div>
      <input
        type="email"
        placeholder="Email"
        className="border-[1px] border-[#ccc] p-3 rounded-[16px]"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          email(event.target.value)
        }
      />
      <div id="passwordContainer" className="w-[100%] relative">
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className={styles.passwordField}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            password(event.target.value)
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
