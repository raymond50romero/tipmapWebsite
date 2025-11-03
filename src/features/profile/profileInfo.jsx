import { useState } from "react";

import OccupationPill from "../../components/occupationPill/occupationPill.jsx";
import { useProfileStatus } from "../../globals/profileStatus.jsx";

export default function ProfileInfo() {
  const { profileStatus } = useProfileStatus();

  return (
    <section>
      <OccupationPill />
    </section>
  );
}
