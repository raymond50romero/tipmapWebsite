import React, { useEffect } from "react";
import axios from "axios";

import { useLoginStatus } from "../globals/loginStatus.jsx";
import { useProfileStatus } from "../globals/profileStatus.jsx";

import TopNav from "../components/topnav/topnav";
import Tipmap from "../components/tipmap/tipmap.jsx";
import AuthWindow from "../components/windows/auth/authWindow.jsx";
import NewPostWindow from "../components/windows/newPost/newPostWindow.jsx";
import ProfileWindow from "../components/windows/profile/profileWindow.jsx";
import Posts from "../components/posts/posts.jsx";

import "../index.css";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;
const checkUserRoute = import.meta.env.VITE_CHECK_USER;

export default function MainPage() {
  const { setLoginStatus } = useLoginStatus();
  const { setProfileStatus } = useProfileStatus();

  // check if user is logged in on startup
  useEffect(() => {
    async function checkUser() {
      return await axios
        .get(`${host}:${port}/${checkUserRoute}`, { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            setLoginStatus(true);
            setProfileStatus((prev) => ({
              ...prev,
              username: res.data.payload.username,
              email: res.data.payload.email,
            }));
            return true;
          } else {
            console.log("unable to verify user");
            return false;
          }
        })
        .catch((error) => {
          console.log("error when checking for user: ", error);
          return false;
        });
    }

    checkUser();
  }, [setLoginStatus, setProfileStatus]);

  return (
    <>
      <div id="main-container">
        <header>
          <TopNav />
        </header>
        <main>
          <Posts />
          <Tipmap />
        </main>
        <div id="blur-background" />
        <AuthWindow />
        <NewPostWindow />
        <ProfileWindow />
      </div>
    </>
  );
}
