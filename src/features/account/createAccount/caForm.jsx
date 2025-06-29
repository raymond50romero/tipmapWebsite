import React, { useState, useEffect } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Select } from 'antd';

import './caWindow.styles.css';
import doCreate from '../api/doCreate.jsx';

export default function CreateAccountForm({ setDidCreate }) {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [occupation, setOccupation] = useState();
  const [other, setOther] = useState();
  const [visible, setVisible] = useState(false);

  const options = [
    {
      label: 'Bartender',
      value: 'bartender',
    },
    {
      label: 'Server',
      value: 'server',
    },
    {
      label: 'Other',
      value: 'other',
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
        if (
          doCreate(
            email,
            userName,
            password,
            confirmPassword,
            occupation,
            other
          )
        ) {
          setDidCreate(true);
        } else setDidCreate(false);
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
          placeholder="Select..."
          onChange={(event) => {
            if (event.includes('other')) {
              document.getElementById('other-found-input').style.display =
                'block';
            } else {
              document.getElementById('other-found-input').style.display =
                'none';
            }
            setOccupation(event);
          }}
          options={options}
        />
      </div>
      <input
        id="other-found-input"
        className="input-field"
        placeholder="Specify other..."
        onChange={(event) => {
          setOther(event.target.value);
        }}
      />
      <button id="create-account-button" className="login-button">
        Create Account
      </button>
    </form>
  );
}
