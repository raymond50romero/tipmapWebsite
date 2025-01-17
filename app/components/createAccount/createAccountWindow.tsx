'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';

import CAEmailPassword from './createAccountEmailPassword';

import { CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

export default function CAWindow() {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFOH, setIsFOH] = useState<boolean>(false);
  const [isBOH, setIsBOH] = useState<boolean>(false);
  const [isManagement, setIsManagement] = useState<boolean>(false);
  const [isGuest, setIsGuest] = useState<boolean>(false);

  function closeWindow() {
    document.getElementById('create-account-window')!.style.display = 'none';
    document.getElementById('login_popup_window')!.style.display = 'block';
  }

  return (
    <div className={styles.popupWindow} id="create-account-window">
      <div className="flex flex-col h-full w-full justify-between gap-8">
        <div className="flex flex-row h-[10%] w-full justify-between">
          <h3 className="flex justify-center items-center text-3xl">
            Create Account
          </h3>
          <CloseOutlined onClick={() => closeWindow()} />
        </div>
        <CAEmailPassword
          userName={setUserName}
          email={setEmail}
          password={setPassword}
        />
        <Switch defaultChecked />
        <button className={styles.nextButton} id="create-account-ep-next">
          Next
        </button>
      </div>
    </div>
  );
}
