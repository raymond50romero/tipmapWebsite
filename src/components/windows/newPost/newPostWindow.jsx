import React, { useEffect, useState } from "react";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";

import NewPostForm from "../../../features/newPost/newPostForm.jsx";
import PostDetailsForm from "../../../features/newPost/postDetailsForm.jsx";
import { useUserLongLat } from "../../../globals/userLongLat.jsx";
import { useHelper } from "../../../globals/helper/helperContext.jsx";
import { useMapState } from "../../../globals/mapState.jsx";
import newPost from "../../../features/newPost/api/makeNewPost.jsx";
import "./styles.css";

export default function NewPostWindow() {
  const setHelper = useHelper();
  const { userLongLat } = useUserLongLat();
  const { mapCenter } = useMapState();
  const [nextForm, setNextForm] = useState(false);
  const [brandId, setBrandId] = useState();
  const [mapboxId, setMapboxId] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [place, setPlace] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [weekdayTips, setWeekdayTips] = useState();
  const [weekendTips, setWeekendTips] = useState();
  const [workenv, setWorkenv] = useState();
  const [management, setManagement] = useState();
  const [clientele, setClientele] = useState();
  const [title, setTitle] = useState();
  const [comment, setComment] = useState();
  const [close, setClose] = useState(false);

  function closeWindow() {
    const newPostWindow = document.getElementById("new-post-window");
    const blurBackground = document.getElementById("blur-background");
    if (newPostWindow) {
      newPostWindow.style.display = "none";
      blurBackground.style.display = "none";
      setNextForm(false);
    }
  }

  async function createNewPost() {
    const newPostResponse = await newPost(
      mapCenter,
      brandId,
      mapboxId,
      name,
      address,
      place,
      longitude,
      latitude,
      userLongLat,
      weekdayTips,
      weekendTips,
      workenv,
      management,
      clientele,
      title,
      comment,
    );
    if (newPostResponse === 403) {
      setHelper("Cannot create post, no user logged in");
      return;
    }
    if (newPostResponse) {
      setHelper(newPostResponse.data);
    } else {
      setHelper("Error occured while creating new post");
    }
  }

  useEffect(() => {
    if (close) {
      closeWindow();
      setClose(false);
      if (
        name &&
        address &&
        longitude &&
        latitude &&
        weekdayTips &&
        weekendTips &&
        workenv &&
        management &&
        clientele
      ) {
        createNewPost();
      }
    }
  }, [close]);

  return (
    <section className="window" id="new-post-window">
      <div id="new-post-window-header-container">
        <h3 id="new-post-header">Create a New Post</h3>
        {nextForm ? (
          <LeftOutlined
            className="auth-window-header-buttons"
            onClick={() => {
              setNextForm(false);
            }}
          />
        ) : (
          " "
        )}
        <CloseOutlined
          className="auth-window-header-buttons"
          id="new-post-close-window"
          onClick={() => {
            closeWindow();
          }}
        />
      </div>
      <>
        {nextForm ? (
          <PostDetailsForm
            setTitle={setTitle}
            setComment={setComment}
            setClose={setClose}
          />
        ) : (
          <NewPostForm
            setNextForm={setNextForm}
            setBrandId={setBrandId}
            setMapboxId={setMapboxId}
            setName={setName}
            setAddress={setAddress}
            setPlace={setPlace}
            setLongitude={setLongitude}
            setLatitude={setLatitude}
            setWeekdayTips={setWeekdayTips}
            setWeekendTips={setWeekendTips}
            setWorkenv={setWorkenv}
            setManagement={setManagement}
            setClientele={setClientele}
          />
        )}
      </>
    </section>
  );
}
