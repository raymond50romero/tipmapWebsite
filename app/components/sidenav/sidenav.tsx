import React from 'react';

export default function SideNav() {
  return (
    <div className="h-full w-full border border-t-0 flex flex-col justify-evenly">
      <section id="side-top-navigation" className="border-b-[1px] h-full">
        navigate
      </section>
      <section id="side-middle-navigation" className="border-b-[1px] h-full">
        user stuff
      </section>
      <section id="side-bottom-navigation" className="border-b-[1px] h-full">
        general
      </section>
    </div>
  );
}
