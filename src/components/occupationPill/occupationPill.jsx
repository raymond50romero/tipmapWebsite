import { useProfileStatus } from "../../globals/profileStatus.jsx";
import PropTypes from "prop-types";

import "./styles.css";
import { useEffect } from "react";

export default function OccupationPill() {
  const { profileStatus } = useProfileStatus();

  function EachOccupationPill(props) {
    // change color of each pill
    useEffect(() => {
      if (props.data === "bartender") {
        const bartender = document.getElementById(
          "each-pill-container-bartender",
        );
        bartender.style.color = "#6950e8";
        bartender.style.borderColor = "#6950e8";
        bartender.style.backgroundColor = "rgba(105, 80, 232, 0.1)";
      } else if (props.data === "server") {
        const server = document.getElementById("each-pill-container-server");
        server.style.color = "#11b886";
        server.style.borderColor = "#11b886";
        server.style.backgroundColor = "rgba(17, 184, 134, 0.15)";
      } else {
        const other = document.getElementById(
          `each-pill-container-${props.data}`,
        );
        other.style.color = "ffd700";
      }
    }, [props]);

    return (
      <div
        className="each-pill-container"
        id={"each-pill-container-" + props.data}
      >
        {props.data}
      </div>
    );
  }

  EachOccupationPill.propTypes = {
    data: PropTypes.any,
  };

  return (
    <div id="occupation-pill-container">
      {profileStatus.occupation ? (
        profileStatus.occupation.map((data, key) => {
          return <EachOccupationPill data={data} key={key} />;
        })
      ) : (
        <span id="emptyspan" />
      )}
    </div>
  );
}
