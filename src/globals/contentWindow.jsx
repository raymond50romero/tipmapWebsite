import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const ContentWindow = createContext(() => {});

export function ContentWindowProvider({ children }) {
  const [contentWindow, setContentWindow] = useState("login");

  return (
    <ContentWindow.Provider value={{ contentWindow, setContentWindow }}>
      {children}
    </ContentWindow.Provider>
  );
}

export function useContentWindow() {
  const context = useContext(ContentWindow);
  if (!context) {
    throw new Error("useContentStatus must be used within a StatusProvider");
  }
  return context;
}

ContentWindowProvider.propTypes = {
  children: PropTypes.any,
};
