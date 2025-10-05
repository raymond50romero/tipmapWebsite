import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const LoginStatus = createContext(() => {});

export function LoginStatusProvider({ children }) {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <LoginStatus.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </LoginStatus.Provider>
  );
}

export function useLoginStatus() {
  const context = useContext(LoginStatus);
  if (!context) {
    throw new Error("useLoginStatus must be used within a StatusProvider");
  }
  return context;
}

LoginStatusProvider.propTypes = {
  children: PropTypes.any,
};
