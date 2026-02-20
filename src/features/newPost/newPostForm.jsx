import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  setError,
  setNormalTransparent,
  setButtonClick,
  setButtonGrey,
} from "../../utils/setHelperColors.jsx";
import { SearchBox } from "@mapbox/search-js-react";
import { useUserLongLat } from "../../globals/userLongLat.jsx";
import { useMapState } from "../../globals/mapState.jsx";
import { useHelper } from "../../globals/helper/helperContext.jsx";
import { useLoginStatus } from "../../globals/loginStatus.jsx";
import StarRating from "./starRating.jsx";
import AverageTips from "./averageTips.jsx";
import "./styles.css";

const MAP_TOKEN = import.meta.env.VITE_MAP_TOKEN;

export default function NewPostForm({
  setNextForm,
  setBrandId,
  setMapboxId,
  setName,
  setAddress,
  setPlace,
  setLongitude,
  setLatitude,
  setWeekdayTips,
  setWeekendTips,
  setWorkenv,
  setManagement,
  setClientele,
}) {
  const setHelper = useHelper();
  const { userLongLat } = useUserLongLat();
  const { mapCenter } = useMapState();
  const { loginStatus } = useLoginStatus();

  // the purpose of having these 'c hooks' is to catch errors
  // before being sent to backend, reducing api calls
  const [cBrandId, setcBrandId] = useState();
  const [cMapboxId, setcMapboxId] = useState();
  const [cName, setcName] = useState();
  const [cAddress, setcAddress] = useState();
  const [cPlace, setcPlace] = useState();
  const [cLongitude, setcLongitude] = useState();
  const [cLatitude, setcLatitude] = useState();
  const [cWeekdayTips, setcWeekdayTips] = useState();
  const [cWeekendTips, setcWeekendTips] = useState();
  const [cWorkenv, setcWorkenv] = useState();
  const [cManagement, setcManagement] = useState();
  const [cClientele, setcClientele] = useState();

  // border red sets input box to red if no restaurant is given
  // full address is to set the value of the input box
  const [borderRed, setBorderRed] = useState(false);
  const [fullAddress, setFullAddress] = useState();

  function checkInputs() {
    function checkInputsHelper(error, helper) {
      setError(error);
      setHelper(helper);
      return false;
    }
    if (!cName) {
      checkInputsHelper("new-post-input-name", "Missing restaurant name");
      setBorderRed(true);
      return false;
    } else if (!cAddress) {
      checkInputsHelper("new-post-input-address", "Missing restaurant address");
      setBorderRed(true);
      return false;
    } else if (!cWeekdayTips) {
      return checkInputsHelper(
        "weekday-tips-container",
        "Missing weekday tips average",
      );
    } else if (!cWeekendTips) {
      return checkInputsHelper(
        "weekend-tips-container",
        "Missing weekend tips average",
      );
    } else if (!cWorkenv) {
      return checkInputsHelper(
        "work-env-star-rating",
        "Missing work environment star rating",
      );
    } else if (!cManagement) {
      return checkInputsHelper(
        "management-star-rating",
        "Missing management star rating",
      );
    } else if (!cClientele) {
      return checkInputsHelper(
        "clientele-star-rating",
        "Missing clientele star rating",
      );
    } else if (!loginStatus) {
      setHelper("Need to login to make a post");
      return false;
    } else return true;
  }

  useEffect(() => {
    if (
      cName &&
      cAddress &&
      cWeekdayTips &&
      cWeekendTips &&
      cWorkenv &&
      cManagement &&
      cClientele &&
      loginStatus
    ) {
      setButtonClick("new-post-next-button");
    } else {
      setButtonGrey("new-post-next-button");
    }
  }, [
    cName,
    cAddress,
    cWeekdayTips,
    cWeekendTips,
    cWorkenv,
    cManagement,
    cClientele,
    loginStatus,
  ]);

  return (
    <form
      className="new-post-form-container"
      onSubmit={(event) => {
        event.preventDefault();
        if (checkInputs()) {
          setNextForm(true);
          setBrandId(cBrandId);
          setMapboxId(cMapboxId);
          setName(cName);
          setAddress(cAddress);
          setPlace(cPlace);
          setLongitude(cLongitude);
          setLatitude(cLatitude);
          setWeekdayTips(cWeekdayTips);
          setWeekendTips(cWeekendTips);
          setWorkenv(cWorkenv);
          setManagement(cManagement);
          setClientele(cClientele);
        }
      }}
    >
      <h6 className="new-post-helper-header">
        All Required Inputs
        <span id="new-post-login-header-helper">
          {loginStatus ? "" : " Must be logged in to create a post"}
        </span>
      </h6>
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
            const {
              name,
              address,
              full_address,
              place_formatted,
              brand_id,
              mapbox_id,
            } = feature.properties;
            const { longitude, latitude } = feature.properties.coordinates;
            setcBrandId(brand_id);
            setcMapboxId(mapbox_id);
            setcName(name);
            setcAddress(address);
            setcPlace(place_formatted);
            setcLongitude(longitude);
            setcLatitude(latitude);
            setFullAddress(full_address);
          }}
          placeholder="Restaurant name"
          theme={{
            variables: {
              unit: "1rem",
              fontFamily: "inherit",
              border: borderRed ? "1px solid red" : "1px solid #ccc",
              borderRadius: "16px",
              boxShadow: "none",
            },
          }}
          value={cName ? (fullAddress ? cName + " " + fullAddress : cName) : ""}
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
  setBrandId: PropTypes.func,
  setMapboxId: PropTypes.func,
  setName: PropTypes.func,
  setAddress: PropTypes.func,
  setPlace: PropTypes.func,
  setLongitude: PropTypes.func,
  setLatitude: PropTypes.func,
  setWeekdayTips: PropTypes.func,
  setWeekendTips: PropTypes.func,
  setWorkenv: PropTypes.func,
  setManagement: PropTypes.func,
  setClientele: PropTypes.func,
};
