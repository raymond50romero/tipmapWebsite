import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const UserLongLat = createContext(null);

export function UserLongLatProvider({ children }) {
  const [userLongLat, setUserLongLat] = useState(null);

  return (
    <UserLongLat.Provider value={{ userLongLat, setUserLongLat }}>
      {children}
    </UserLongLat.Provider>
  );
}

export function useUserLongLat() {
  const context = useContext(UserLongLat);
  if (!context) {
    throw new Error("useUserLongLat must be used within a UserLongLatProvider");
  }
  return context;
}

UserLongLatProvider.propTypes = {
  children: PropTypes.any,
};
