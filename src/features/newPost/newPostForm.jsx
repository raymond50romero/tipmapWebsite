import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  setError,
  setNormal,
  setNormalTransparent,
  setButtonClick,
  setButtonGrey,
} from "../../utils/setHelperColors.jsx";
import { SearchBox } from "@mapbox/search-js-react";
import { useUserLongLat } from "../../globals/userLongLat.jsx";
import { useMapState } from "../../globals/mapState.jsx";
import { useHelper } from "../../globals/helper/helperContext.jsx";
import { STATES } from "./states.jsx";
import StarRating from "./starRating.jsx";
import AverageTips from "./averageTips.jsx";
import "./styles.css";

const MAP_TOKEN = import.meta.env.VITE_MAP_TOKEN;

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
  const { userLongLat } = useUserLongLat();
  const { mapCenter } = useMapState();
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
      <div id="new-post-input-name">
        <SearchBox
          accessToken={MAP_TOKEN}
          options={{
            types: "poi",
            proximity: userLongLat || mapCenter,
            poi_category: ["restaurant", "bar", "cafe"],
          }}
          onRetrieve={(res) => {
            const feature = res.features[0];
            const { name, address, place, region, postcode } =
              feature.properties;
            console.log("this is feature", feature);
            console.log("this is feature properties", feature.properties);
            setcName(name);
            setcAddress(address);
            if (place) setcCity(place);
            if (region) {
              // Try to match state abbr from region name or code if available
              // Mapbox region usually gives full name or code. We need 2-letter code.
              // Assuming region_code might be available or we just take the first 2 letters if it matches our STATES logic
              // Better: check if region matches any STATE name or abbr
              const stateObj = STATES.find(
                (s) => s.name === region || s.abbr === region,
              );
              if (stateObj) setcState(stateObj.abbr);
              else if (region.length === 2) setcState(region);
            }
          }}
          placeholder="Restaurant name"
          theme={{
            variables: {
              unit: "1rem",
              fontFamily: "inherit",
              border: "1px solid #ccc",
              borderRadius: "16px",
              boxShadow: "none",
              padding: "50px",
            },
          }}
          value={cName || ""}
          onChange={(val) => {
            setcName(val);
          }}
        />
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
