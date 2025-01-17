'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import universalStyles from '../universal.styles.module.css';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export default function CAEmailPassword({
  userName,
  email,
  password,
}: {
  userName: Dispatch<SetStateAction<string>>;
  email: Dispatch<SetStateAction<string>>;
  password: Dispatch<SetStateAction<string>>;
}) {
  const [visible, setVisible] = useState<boolean>();
  const [firstPassword, setFirstPassword] = useState<string>('');
  const [secondPassword, setSecondPassword] = useState<string>('');

  return (
    <div className="flex flex-col justify-between gap-3 w-full">
      <input
        type="text"
        placeholder="Username"
        className={universalStyles.plainTextField}
        onChange={(event) => {
          userName(event.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        className={universalStyles.plainTextField}
        onChange={(event) => {
          email(event.target.value);
        }}
      />
      <div>
        <input
          type={visible ? 'text' : 'password'}
          placeholder="password"
          className={universalStyles.passwordField}
          onChange={(event) => {
            setFirstPassword(event.target.value);
          }}
        />
        {visible ? (
          <EyeOutlined
            className={universalStyles.visibleIcon}
            onClick={() => setVisible(!visible)}
          />
        ) : (
          <EyeInvisibleOutlined
            className={universalStyles.visibleIcon}
            onClick={() => setVisible(!visible)}
          />
        )}
      </div>
      <div>
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Confirm Password"
          className={universalStyles.passwordField}
          onChange={(event) => {
            setSecondPassword(event.target.value);
          }}
        />
        {visible ? (
          <EyeOutlined
            className={universalStyles.visibleIcon}
            onClick={() => setVisible(!visible)}
          />
        ) : (
          <EyeInvisibleOutlined
            className={universalStyles.visibleIcon}
            onClick={() => setVisible(!visible)}
          />
        )}
      </div>
    </div>
  );
}
