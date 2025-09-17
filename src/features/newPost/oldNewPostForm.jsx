import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  setError,
  setNormal,
  setNormalTransparent,
  setButtonClick,
  setButtonGrey,
} from "../../utils/setHelperColors.jsx";
import { useHelper } from "../../globals/helper/helperContext.jsx";
import { STATES } from "./states.jsx";
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
  const [cCity, setcCity] = useState("San Diego");
  const [cState, setcState] = useState("");
  const [cWeekdayTips, setcWeekdayTips] = useState();
  const [cWeekendTips, setcWeekendTips] = useState();
  const [cWorkenv, setcWorkenv] = useState();
  const [cManagement, setcManagement] = useState();
  const [cClientele, setcClientele] = useState();

  function checkInputs() {
    if (!cName) {
      setError("new-post-input-name");
      setHelper("Missing restaurant name");
      return false;
    } else if (!cAddress) {
      setError("new-post-input-address");
      setHelper("Missing restaurant address");
      return false;
    } else if (!cWeekdayTips) {
      setError("weekday-tips-container");
      setHelper("Missing weekday tips average");
      return false;
    } else if (!cWeekendTips) {
      setError("weekend-tips-container");
      setHelper("Missing weekend tips average");
      return false;
    } else if (!cWorkenv) {
      setError("work-env-star-rating");
      setHelper("Missing work environment star rating");
      return false;
    } else if (!cManagement) {
      setError("management-star-rating");
      setHelper("Missing management star rating");
      return false;
    } else if (!cClientele) {
      setError("clientele-star-rating");
      setHelper("Missing clientele star rating");
      return false;
    } else return true;
  }

  function handleStateChange(e) {
    const { name, value } = e.target;
    if (name === "state") {
      setcState((f) => ({ ...f, state: value.toUpperCase().slice(0, 2) }));
    } else {
      setcState((f) => ({ ...f, [name]: value }));
    }
  }

  useEffect(() => {
    if (
      cName &&
      cAddress &&
      cWeekdayTips &&
      cWeekendTips &&
      cWorkenv &&
      cManagement &&
      cClientele
    ) {
      setButtonClick("new-post-next-button");
    }
  }, [
    cName,
    cAddress,
    cWeekdayTips,
    cWeekendTips,
    cWorkenv,
    cManagement,
    cClientele,
  ]);

  return (
    <form
      className="new-post-form-container"
      onSubmit={(event) => {
        event.preventDefault();
        if (checkInputs()) {
          setNextForm(true);
          setName(cName);
          setAddress(cAddress);
          setWeekdayTips(cWeekdayTips);
          setWeekendTips(cWeekendTips);
          setWorkenv(cWorkenv);
          setManagement(cManagement);
          setClientele(cClientele);
        }
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
          setNormal("new-post-input-name");
        }}
      />
      <input
        type="text"
        placeholder="Address"
        id="new-post-input-address"
        className="input-field new-post-input"
        onChange={(event) => {
          setcAddress(event.target.value);
          setNormal("new-post-input-address");
        }}
      />
      <div id="new-post-city-state-container">
        <input
          type="text"
          placeholder="City"
          id="new-post-input-city"
          className="input-field new-post-input"
          onChange={(event) => {
            setcCity(event.target.value);
            setNormal("new-post-input-city");
          }}
        />
        <label>
          <input
            className="input-field new-post-input"
            list="state-list"
            name="state"
            placeholder="State"
            onChange={handleStateChange}
            inputMode="text"
            pattern="[A-Za-z]{2}"
            title="Use the 2-letter state code (e.g., CA)"
          />
          <datalist id="state-list">
            {STATES.map((s) => (
              <option key={s.abbr} value={s.abbr}>{`${s.name}`}</option>
            ))}
          </datalist>
        </label>
      </div>
      <div className="avg-tips-container">
        <h6 className="avg-tips-header">Average Weekday Tips</h6>
        <div
          className="avg-tips-ratings-container"
          style={{ border: "1px solid transparent" }}
          id="weekday-tips-container"
        >
          <input
            type="radio"
            name="weekday-tips"
            id="weekday-1"
            className="avg-tips-rating"
            onClick={() => {
              setcWeekdayTips(1);
              setNormalTransparent("weekday-tips-container");
            }}
          />
          <label htmlFor="weekday-1" className="avg-tips-label">
            {" "}
            &lt; 50
          </label>
          <input
            type="radio"
            name="weekday-tips"
            id="weekday-2"
            className="avg-tips-rating"
            onClick={() => {
              setcWeekdayTips(2);
              setNormalTransparent("weekday-tips-container");
            }}
          />
          <label htmlFor="weekday-2" className="avg-tips-label">
            50 - 100
          </label>
          <input
            type="radio"
            name="weekday-tips"
            id="weekday-3"
            className="avg-tips-rating"
            onClick={() => {
              setcWeekdayTips(3);
              setNormalTransparent("weekday-tips-container");
            }}
          />
          <label htmlFor="weekday-3" className="avg-tips-label">
            100 - 150
          </label>
          <input
            type="radio"
            name="weekday-tips"
            id="weekday-4"
            className="avg-tips-rating"
            onClick={() => {
              setcWeekdayTips(4);
              setNormalTransparent("weekday-tips-container");
            }}
          />
          <label htmlFor="weekday-4" className="avg-tips-label">
            150 - 200
          </label>
          <input
            type="radio"
            name="weekday-tips"
            id="weekday-5"
            className="avg-tips-rating"
            onClick={() => {
              setcWeekdayTips(5);
              setNormalTransparent("weekday-tips-container");
            }}
          />
          <label htmlFor="weekday-5" className="avg-tips-label">
            {" "}
            &gt; 200
          </label>
        </div>
      </div>
      <div className="avg-tips-container">
        <h6 className="avg-tips-header">Average Weekend Tips</h6>
        <div
          className="avg-tips-ratings-container"
          style={{ border: "1px solid transparent" }}
          id="weekend-tips-container"
        >
          <input
            type="radio"
            name="weekend-tips"
            id="weekend-1"
            className="avg-tips-rating"
            onClick={() => {
              setcWeekendTips(1);
              setNormalTransparent("weekend-tips-container");
            }}
          />
          <label htmlFor="weekend-1" className="avg-tips-label">
            {" "}
            &lt; 100
          </label>
          <input
            type="radio"
            name="weekend-tips"
            id="weekend-2"
            className="avg-tips-rating"
            onClick={() => {
              setcWeekendTips(2);
              setNormalTransparent("weekend-tips-container");
            }}
          />
          <label htmlFor="weekend-2" className="avg-tips-label">
            100 - 150
          </label>
          <input
            type="radio"
            name="weekend-tips"
            id="weekend-3"
            className="avg-tips-rating"
            onClick={() => {
              setcWeekendTips(3);
              setNormalTransparent("weekend-tips-container");
            }}
          />
          <label htmlFor="weekend-3" className="avg-tips-label">
            150 - 200
          </label>
          <input
            type="radio"
            name="weekend-tips"
            id="weekend-4"
            className="avg-tips-rating"
            onClick={() => {
              setcWeekendTips(4);
              setNormalTransparent("weekend-tips-container");
            }}
          />
          <label htmlFor="weekend-4" className="avg-tips-label">
            200 - 250
          </label>
          <input
            type="radio"
            name="weekend-tips"
            id="weekend-5"
            className="avg-tips-rating"
            onClick={() => {
              setcWeekendTips(5);
              setNormalTransparent("weekend-tips-container");
            }}
          />
          <label htmlFor="weekend-5" className="avg-tips-label">
            250 &lt;
          </label>
        </div>
      </div>
      <div id="star-rating-container">
        <span
          id="work-env-star-rating"
          style={{ border: "1px solid transparent" }}
        >
          Work environment
          <StarRating
            onChange={(value) => {
              setcWorkenv(value);
              setNormalTransparent("work-env-star-rating");
            }}
          />
        </span>
        <span
          id="management-star-rating"
          style={{ border: "1px solid transparent" }}
        >
          Management
          <StarRating
            onChange={(value) => {
              setcManagement(value);
              setNormalTransparent("management-star-rating");
            }}
          />
        </span>
        <span
          id="clientele-star-rating"
          style={{ border: "1px solid transparent" }}
        >
          Clientele
          <StarRating
            onChange={(value) => {
              setcClientele(value);
              setNormalTransparent("clientele-star-rating");
            }}
          />
        </span>
      </div>
      <div id="new-post-window-button-container">
        <button className="login-button" id="new-post-next-button">
          Next &gt;
        </button>
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
