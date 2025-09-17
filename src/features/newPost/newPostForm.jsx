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
import AverageTips from "./averageTips.jsx";
import "./styles.css";

export default function NewPostForm({
  setNextForm,
  setName,
  setAddress,
  setCity,
  setState,
  setWeekdayTips,
  setWeekendTips,
  setWorkenv,
  setManagement,
  setClientele,
}) {
  const setHelper = useHelper();
  const [cName, setcName] = useState();
  const [cAddress, setcAddress] = useState();
  const [cCity, setcCity] = useState();
  const [cState, setcState] = useState();
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
    } else if (!cCity) {
      setError("new-post-input-city");
      setHelper("Missing city name");
      return false;
    } else if (!cState) {
      setError("new-post-input-state");
      setHelper("Missing state");
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
      cCity &&
      cState &&
      cWeekdayTips &&
      cWeekendTips &&
      cWorkenv &&
      cManagement &&
      cClientele
    ) {
      setButtonClick("new-post-next-button");
    } else {
      setButtonGrey("new-post-next-button");
    }
  }, [
    cName,
    cAddress,
    cCity,
    cState,
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
          setCity(cCity);
          setState(cState);
          setWeekdayTips(cWeekdayTips);
          setWeekendTips(cWeekendTips);
          setWorkenv(cWorkenv);
          setManagement(cManagement);
          setClientele(cClientele);
        }
      }}
    >
      <h6 className="new-post-helper-header">All Required Inputs</h6>
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
            id="new-post-input-state"
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
      <AverageTips
        title={"Average Weekday Tips"}
        numbers={["50", "50 - 100", "100 - 150", "150 - 200", "200"]}
        setcTips={setcWeekdayTips}
        setNormalTransparent={setNormalTransparent}
        idTipsContainer={"weekday-tips-container"}
        idEach={[
          "weekday-1",
          "weekday-2",
          "weekday-3",
          "weekday-4",
          "weekday-5",
        ]}
        name={"weekday-tips"}
      />
      <AverageTips
        title={"Average Weekend Tips"}
        numbers={["100", "100 - 150", "150 - 200", "200 - 250", "250"]}
        setcTips={setcWeekendTips}
        setNormalTransparent={setNormalTransparent}
        idTipsContainer={"weekend-tips-container"}
        idEach={[
          "weekend-1",
          "weekend-2",
          "weekend-3",
          "weekend-4",
          "weekend-5",
        ]}
        name={"weekend-tips"}
      />
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
  setCity: PropTypes.func,
  setState: PropTypes.func,
  setWeekdayTips: PropTypes.func,
  setWeekendTips: PropTypes.func,
  setWorkenv: PropTypes.func,
  setManagement: PropTypes.func,
  setClientele: PropTypes.func,
};
