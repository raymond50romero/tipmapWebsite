import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const ContentStatus = createContext(() => {});

export function ContentStatusProvider({ children }) {
  const [contentStatus, setContentStatus] = useState("restaurant");

  return (
    <ContentStatus.Provider value={{ contentStatus, setContentStatus }}>
      {children}
    </ContentStatus.Provider>
  );
}

export function useContentStatus() {
  const context = useContext(ContentStatus);
  if (!context) {
    throw new Error("useContentStatus must be used within a StatusProvider");
  }
  return context;
}

ContentStatusProvider.propTypes = {
  children: PropTypes.any,
};
