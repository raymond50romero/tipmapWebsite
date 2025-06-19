import React, { useState, useEffect } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Select, Space } from 'antd';

import './caWindow.styles.css';
import doCreate from '../api/doCreate.jsx';

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

  useEffect(() => {
    const caButton = document.getElementById('create-account-button');
    if (userName && email && password && confirmPassword) {
      caButton.style.background = '#33f';
      caButton.style.color = 'white';
      caButton.style.cursor = 'pointer';
    } else {
      caButton.style.background = '#eee';
      caButton.style.color = 'black';
      caButton.style.cursor = 'default';
    }
  }, [userName, email, password, confirmPassword, occupation]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        doCreate(email, userName, password, confirmPassword, occupation);
      }}
      id="ca-form-container"
    >
      <input
        type="email"
        placeholder="Email"
        className="input-field"
        id="create-email-field"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Username"
        className="input-field"
        id="create-username-field"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <div className="password-container">
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className="input-field password-field"
          id="create-password-field"
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
          id="create-confirm-password-field"
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
        <h6>Select Occupation(s)</h6>
        <Select
          id="create-select-occupation-field"
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Select front of house positions..."
          onChange={(event) => {
            setOccupation(event);
          }}
          options={options}
        />
      </div>
      <div id="helper-message" />
      <button id="create-account-button" className="login-button">
        Create Account
      </button>
    </form>
  );
}
