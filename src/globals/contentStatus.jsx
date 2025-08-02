import React, { useContext, createContext, useState } from "react";

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
