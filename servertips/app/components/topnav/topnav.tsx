import React from "react";
import ServerIcon from "../../../public/static/images/ServerHomeIcon.jpg";
import Image from "@/node_modules/next/image";

import LoginButtons from "./loginButtons";
import styles from "./styles.module.css";

export default function TopNav() {
  return (
    <div className="flex h-full w-full flex-row justify-between border-b pl-4 pr-4">
      <h1 className={styles.serverTipsTitle}>Server Tips</h1>
      <LoginButtons />
    </div>
  );
}
