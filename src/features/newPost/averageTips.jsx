import React from "react";
import PropTypes from "prop-types";

export default function AverageTips({
  title,
  numbers,
  setcTips,
  setNormalTransparent,
}) {
  return (
    <div className="avg-tips-container">
      <h6 className="avg-tips-header">{title}</h6>
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
            setcTips(1);
            setNormalTransparent("weekday-tips-container");
          }}
        />
        <label htmlFor="weekday-1" className="avg-tips-label">
          {" "}
          &lt; {numbers[0]}
        </label>
        <input
          type="radio"
          name="weekday-tips"
          id="weekday-2"
          className="avg-tips-rating"
          onClick={() => {
            setcTips(2);
            setNormalTransparent("weekday-tips-container");
          }}
        />
        <label htmlFor="weekday-2" className="avg-tips-label">
          {numbers[1]}
        </label>
        <input
          type="radio"
          name="weekday-tips"
          id="weekday-3"
          className="avg-tips-rating"
          onClick={() => {
            setcTips(3);
            setNormalTransparent("weekday-tips-container");
          }}
        />
        <label htmlFor="weekday-3" className="avg-tips-label">
          {numbers[2]}
        </label>
        <input
          type="radio"
          name="weekday-tips"
          id="weekday-4"
          className="avg-tips-rating"
          onClick={() => {
            setcTips(4);
            setNormalTransparent("weekday-tips-container");
          }}
        />
        <label htmlFor="weekday-4" className="avg-tips-label">
          {numbers[3]}
        </label>
        <input
          type="radio"
          name="weekday-tips"
          id="weekday-5"
          className="avg-tips-rating"
          onClick={() => {
            setcTips(5);
            setNormalTransparent("weekday-tips-container");
          }}
        />
        <label htmlFor="weekday-5" className="avg-tips-label">
          {" "}
          {numbers[4]} &lt;
        </label>
      </div>
    </div>
  );
}

AverageTips.propTypes = {
  title: PropTypes.string,
  numbers: PropTypes.object,
  setcTips: PropTypes.func,
  setNormalTransparent: PropTypes.func,
};
