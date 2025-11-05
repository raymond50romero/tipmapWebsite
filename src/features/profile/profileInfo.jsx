import { useState } from "react";

import OccupationPill from "../../components/occupationPill/occupationPill.jsx";
import { useProfileStatus } from "../../globals/profileStatus.jsx";
import "./styles.css";

export default function ProfileInfo() {
  const { profileStatus } = useProfileStatus();

  return (
    <section>
      <div id="profile-info-header">
        <OccupationPill />
        <p id="proile-info-email">{profileStatus.email}</p>
      </div>
    </section>
  );
}
