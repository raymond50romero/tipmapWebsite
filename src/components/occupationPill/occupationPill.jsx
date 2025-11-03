import { useProfileStatus } from "../../globals/profileStatus.jsx";
import PropTypes from "prop-types";

import "./styles.css";

export default function OccupationPill() {
  const { profileStatus } = useProfileStatus();

  function EachOccupationPill(props) {
    return (
      <div
        className="each-pill-container"
        id={"each-pill-container-" + props.data}
      >
        <div>{props.data}</div>
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
