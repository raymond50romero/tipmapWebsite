import React from 'react';

import './style.css';

export default function SideNav() {
  return (
    <div id="sidenav-container">
      <section id="sidenav-main-container">
        main navigation goes here (restaurants, tipmap, cities etc...)
      </section>
      <section id="sidenav-secondary-container">
        still deciding what goes here, (like history or nav between different
        sections like community help and/or finding a job)
      </section>
      <section id="sidenav-settings-container">
        general settings go here
      </section>
    </div>
  );
}
