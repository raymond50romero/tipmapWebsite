import React, { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Select, Space } from 'antd';

import './caWindow.styles.css';
import doCreate from './doCreate';

export default function CreateAccountForm() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [occupation, setOccupation] = useState();
  const [visible, setVisible] = useState(false);

  const options = [
    {
      label: 'Bartender',
      value: 'bartender',
    },
    {
      label: 'Busser',
      value: 'busser',
    },
    {
      label: 'Host/Greeter',
      value: 'host',
    },
    {
      label: 'Takeout',
      value: 'takeout',
    },
    {
      label: 'Server/Waiter',
      value: 'server',
    },
    {
      label: 'Management',
      value: 'management',
    },
    {
      label: 'Non restaurant worker',
      value: 'guest',
    },
  ];

  return (
    <div id="ca-form-container">
      <input
        type="email"
        placeholder="Email"
        className="input-field"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Username"
        className="input-field"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <div className="password-container">
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className="input-field password-field"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {visible ? (
          <EyeOutlined
            className="eye-outline"
            onClick={() => {
              setVisible(!visible);
            }}
          />
        ) : (
          <EyeInvisibleOutlined
            className="eye-outline"
            onClick={() => {
              setVisible(!visible);
            }}
          />
        )}
      </div>
      <div className="password-container">
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Confirm Password"
          className="input-field password-field"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        {visible ? (
          <EyeOutlined
            className="eye-outline"
            onClick={() => {
              setVisible(!visible);
            }}
          />
        ) : (
          <EyeInvisibleOutlined
            className="eye-outline"
            onClick={() => {
              setVisible(!visible);
            }}
          />
        )}
      </div>
      <div>
        <h6>Select occupations</h6>
        <Select
          id="select-occupation"
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Select front of house positions..."
          onChange={(event) => {
            setOccupation(event);
          }}
          options={options}
        />
      </div>
      <button
        className="login-button"
        onClick={() => {
          console.log(
            doCreate(email, userName, password, confirmPassword, occupation)
          );
        }}
      >
        Create Account
      </button>
    </div>
  );
}
