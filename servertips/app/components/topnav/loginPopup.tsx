"use client";
import React, { useState } from "react";

import styles from "./styles.module.css";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

export default function LoginPopup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  function login() {}

  return (
    <div className={styles.displayPopupLogin}>
      <div className="flex flex-row">
        <h3 className="flex w-full flex-col items-start justify-start pb-[2rem] text-2xl">
          Log In
        </h3>
        <CloseOutlined className="pb-[2rem]" />
      </div>
      <div id="sigle-signon"></div>
      <div className="flex h-[40%] flex-col gap-[1rem]">
        <input
          className="h-[28%] w-full rounded-[10px] border p-1"
          type="text"
          placeholder="Email or Username"
          onClick={(event: any) => {
            setUserName(event.target.value);
          }}
        />
        <div className="relative h-[28%]">
          <input
            className="h-full w-full rounded-[10px] border p-1"
            type={visible ? "text" : "password"}
            placeholder="Password"
            onClick={(event: any) => {
              setPassword(event.target.value);
            }}
          />
          {visible ? (
            <EyeOutlined
              className="absolute right-[10px] top-[50%] translate-y-[-50%] p-[5px]"
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <EyeInvisibleOutlined
              className="absolute right-[10px] top-[50%] translate-y-[-50%] p-[5px]"
              onClick={() => setVisible(!visible)}
            />
          )}
        </div>
      </div>
      <p>Forgot Password?</p>
      <p>
        New user? <span>Create Account</span>
      </p>
    </div>
  );
}
