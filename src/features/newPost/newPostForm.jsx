import React, { useState } from "react";
import PropTypes from "prop-types";

import { useHelper } from "../../components/helper/helperContext.jsx";
import StarRating from "./starRating.jsx";
import "./styles.css";

export default function NewPostForm({ setNextForm }) {
  const setHelper = useHelper();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [weekdayTips, setWeekdayTips] = useState();
  const [weekendTips, setWeekendTips] = useState();
  const [rating, setRating] = useState();

  return (
    <form
      className="new-post-form-container"
      onSubmit={(event) => {
        event.preventDefault();
        if (!name || !address || !weekdayTips || !weekendTips) {
          setHelper("missing information");
          return;
        }
        setNextForm(true);
        console.log("form submitted");
        console.log("this is name: ", name);
        console.log("this is address: ", address);
        console.log("this is weekday tips: ", weekdayTips);
        console.log("this is weekend tips: ", weekendTips);
      }}
    >
      <h6 className="new-post-helper-header">* Required</h6>
      <input
        type="text"
        placeholder="Restaurant Name"
        id="new-post-input-name"
        className="input-field new-post-input"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Restaurant Address"
        id="new-post-input-address"
        className="input-field new-post-input"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <div className="avg-tips-container">
        <h6 className="avg-tips-header">Average Weekday Tips</h6>
        <div className="avg-tips-ratings-container">
          <input
            type="radio"
            name="weekday-tips"
            id="weekday-0"
            className="avg-tips-rating"
            onClick={() => {
              setWeekdayTips(0);
            }}
          />
          <label htmlFor="weekday-0" className="avg-tips-label">
            {" "}
            &lt; 50
          </label>
          <input
            type="radio"
            name="weekday-tips"
            id="weekday-1"
            className="avg-tips-rating"
            onClick={() => {
              setWeekdayTips(1);
            }}
          />
          <label htmlFor="weekday-1" className="avg-tips-label">
            50 - 100
          </label>
          <input
            type="radio"
            name="weekday-tips"
            id="weekday-2"
            className="avg-tips-rating"
            onClick={() => {
              setWeekdayTips(2);
            }}
          />
          <label htmlFor="weekday-2" className="avg-tips-label">
            100 - 150
          </label>
          <input
            type="radio"
            name="weekday-tips"
            id="weekday-3"
            className="avg-tips-rating"
            onClick={() => {
              setWeekdayTips(3);
            }}
          />
          <label htmlFor="weekday-3" className="avg-tips-label">
            150 - 200
          </label>
          <input
            type="radio"
            name="weekday-tips"
            id="weekday-4"
            className="avg-tips-rating"
            onClick={() => {
              setWeekdayTips(4);
            }}
          />
          <label htmlFor="weekday-4" className="avg-tips-label">
            {" "}
            &gt; 200
          </label>
        </div>
      </div>
      <div className="avg-tips-container">
        <h6 className="avg-tips-header">Average Weekend Tips</h6>
        <div className="avg-tips-ratings-container">
          <input
            type="radio"
            name="weekend-tips"
            id="weekend-0"
            className="avg-tips-rating"
            onClick={() => {
              setWeekendTips(0);
            }}
          />
          <label htmlFor="weekend-0" className="avg-tips-label">
            {" "}
            &lt; 100
          </label>
          <input
            type="radio"
            name="weekend-tips"
            id="weekend-1"
            className="avg-tips-rating"
            onClick={() => {
              setWeekendTips(1);
            }}
          />
          <label htmlFor="weekend-1" className="avg-tips-label">
            100 - 150
          </label>
          <input
            type="radio"
            name="weekend-tips"
            id="weekend-2"
            className="avg-tips-rating"
            onClick={() => {
              setWeekendTips(2);
            }}
          />
          <label htmlFor="weekend-2" className="avg-tips-label">
            150 - 200
          </label>
          <input
            type="radio"
            name="weekend-tips"
            id="weekend-3"
            className="avg-tips-rating"
            onClick={() => {
              setWeekendTips(3);
            }}
          />
          <label htmlFor="weekend-3" className="avg-tips-label">
            200 - 250
          </label>
          <input
            type="radio"
            name="weekend-tips"
            id="weekend-4"
            className="avg-tips-rating"
            onClick={() => {
              setWeekendTips(4);
            }}
          />
          <label htmlFor="weekend-4" className="avg-tips-label">
            250 &lt;
          </label>
        </div>
      </div>
      <div id="star-rating-container">
        <span>
          work environment
          <StarRating
            onChange={(value) => {
              setRating(value);
            }}
          />
        </span>
        <span>
          management
          <StarRating
            onChange={(value) => {
              setRating(value);
            }}
          />
        </span>
        <span>
          clientele
          <StarRating
            onChange={(value) => {
              setRating(value);
            }}
          />
        </span>
      </div>
      <div id="new-post-window-button-container">
        <button className="login-button">Next &gt;</button>
      </div>
    </form>
  );
}

NewPostForm.propTypes = {
  setNextForm: PropTypes.func,
};
