import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const ProfileStatus = createContext(null);

export function ProfileStatusProvider({ children }) {
  const profileTypes = {
    username: "username",
    email: "email",
    occupation: ["bartender", "server"],
    posts: {},
  };

  const [profileStatus, setProfileStatus] = useState(profileTypes);

  return (
    <ProfileStatus.Provider value={{ profileStatus, setProfileStatus }}>
      {children}
    </ProfileStatus.Provider>
  );
}

export function useProfileStatus() {
  const context = useContext(ProfileStatus);
  if (!context) {
    throw new Error("useLoginStatus must be used within a StatusProvider");
  }
  return context;
}

ProfileStatusProvider.propTypes = {
  children: PropTypes.any,
};
