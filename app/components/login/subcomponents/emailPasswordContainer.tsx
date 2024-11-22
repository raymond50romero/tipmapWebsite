import React, { useState } from 'react';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export default function EmailPasswordContainer({
  setEmail,
  setPassword,
}: {
  setEmail: any;
  setPassword: any;
}) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <input
        type="email"
        placeholder="Email"
        className="border-2 border-black"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
      />
      <div id="passwordContainer">
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          className="border-2 border-black"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        {visible ? (
          <EyeOutlined
            className="visible-icon"
            onClick={() => setVisible(!visible)}
          />
        ) : (
          <EyeInvisibleOutlined
            className="visible-icon"
            onClick={() => setVisible(!visible)}
          />
        )}
      </div>
    </div>
  );
}
