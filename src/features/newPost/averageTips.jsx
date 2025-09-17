import React from "react";
import PropTypes from "prop-types";

export default function AverageTips({
  title,
  numbers,
  setcTips,
  setNormalTransparent,
  idTipsContainer,
  idEach,
  name,
}) {
  return (
    <div className="avg-tips-container">
      <h6 className="avg-tips-header">{title}</h6>
      <div
        className="avg-tips-ratings-container"
        style={{ border: "1px solid transparent" }}
        id={idTipsContainer}
      >
        <input
          type="radio"
          name={name}
          id={idEach[0]}
          className="avg-tips-rating"
          onClick={() => {
            setcTips(1);
            setNormalTransparent("weekday-tips-container");
          }}
        />
        <label htmlFor={idEach[0]} className="avg-tips-label">
          {" "}
          &lt; {numbers[0]}
        </label>
        <input
          type="radio"
          name={name}
          id={idEach[1]}
          className="avg-tips-rating"
          onClick={() => {
            setcTips(2);
            setNormalTransparent("weekday-tips-container");
          }}
        />
        <label htmlFor={idEach[1]} className="avg-tips-label">
          {numbers[1]}
        </label>
        <input
          type="radio"
          name={name}
          id={idEach[2]}
          className="avg-tips-rating"
          onClick={() => {
            setcTips(3);
            setNormalTransparent("weekday-tips-container");
          }}
        />
        <label htmlFor={idEach[2]} className="avg-tips-label">
          {numbers[2]}
        </label>
        <input
          type="radio"
          name={name}
          id={idEach[3]}
          className="avg-tips-rating"
          onClick={() => {
            setcTips(4);
            setNormalTransparent("weekday-tips-container");
          }}
        />
        <label htmlFor={idEach[3]} className="avg-tips-label">
          {numbers[3]}
        </label>
        <input
          type="radio"
          name={name}
          id={idEach[4]}
          className="avg-tips-rating"
          onClick={() => {
            setcTips(5);
            setNormalTransparent("weekday-tips-container");
          }}
        />
        <label htmlFor={idEach[4]} className="avg-tips-label">
          {" "}
          &gt; {numbers[4]}
        </label>
      </div>
    </div>
  );
}

AverageTips.propTypes = {
  title: PropTypes.string,
  numbers: PropTypes.array,
  setcTips: PropTypes.func,
  setNormalTransparent: PropTypes.func,
  idTipsContainer: PropTypes.string,
  idEach: PropTypes.array,
  name: PropTypes.string,
};
