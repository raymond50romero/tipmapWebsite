import React, { useState } from "react";
import PropTypes from "prop-types";

import { useHelper } from "../../components/helper/helperContext.jsx";
import StarRating from "./starRating.jsx";
import "./styles.css";

export default function NewPostForm({
  setNextForm,
  setName,
  setAddress,
  setWeekdayTips,
  setWeekendTips,
  setWorkenv,
  setManagement,
  setClientele,
}) {
  const setHelper = useHelper();
  const [cName, setcName] = useState();
  const [cAddress, setcAddress] = useState();
  const [cWeekdayTips, setcWeekdayTips] = useState();
  const [cWeekendTips, setcWeekendTips] = useState();
  const [cWorkenv, setcWorkenv] = useState();
  const [cManagement, setcManagement] = useState();
  const [cClientele, setcClientele] = useState();

  return (
    <form
      className="new-post-form-container"
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !cName ||
          !cAddress ||
          !cWeekdayTips ||
          !cWeekendTips ||
          !cWorkenv ||
          !cManagement ||
          !cClientele
        ) {
          setHelper("missing information");
          return;
        }
        setNextForm(true);
        console.log("form submitted");
        console.log("this is workenv: ", cWorkenv);
        console.log("this is management: ", cManagement);
        console.log("this is clientele: ", cClientele);
        setName(cName);
        setAddress(cAddress);
        setWeekdayTips(cWeekdayTips);
        setWeekendTips(cWeekendTips);
        setWorkenv(cWorkenv);
        setManagement(cManagement);
        setClientele(cClientele);
      }}
    >
      <h6 className="new-post-helper-header">* Required</h6>
      <input
        type="text"
        placeholder="Restaurant Name"
        id="new-post-input-name"
        className="input-field new-post-input"
        onChange={(event) => {
          setcName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Restaurant Address"
        id="new-post-input-address"
        className="input-field new-post-input"
        onChange={(event) => {
          setcAddress(event.target.value);
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
              setcWeekdayTips(0);
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
              setcWeekdayTips(1);
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
              setcWeekdayTips(2);
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
              setcWeekdayTips(3);
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
              setcWeekdayTips(4);
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
              setcWeekendTips(0);
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
              setcWeekendTips(1);
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
              setcWeekendTips(2);
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
              setcWeekendTips(3);
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
              setcWeekendTips(4);
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
              setcWorkenv(value);
            }}
          />
        </span>
        <span>
          management
          <StarRating
            onChange={(value) => {
              setcManagement(value);
            }}
          />
        </span>
        <span>
          clientele
          <StarRating
            onChange={(value) => {
              setcClientele(value);
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
  setName: PropTypes.func,
  setAddress: PropTypes.func,
  setWeekdayTips: PropTypes.func,
  setWeekendTips: PropTypes.func,
  setWorkenv: PropTypes.func,
  setManagement: PropTypes.func,
  setClientele: PropTypes.func,
};
