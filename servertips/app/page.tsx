import React from "react";
import TopNav from "./components/topnav/topnav";
import SideNav from "./components/sidenav/sidenav";

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-[15%_85%] grid-rows-[7%_93%]">
      <section className="col-span-2">
        <TopNav />
      </section>
      <section className="row-span-2">
        <SideNav />
      </section>
      <section id="homepage-body">
        <h1>hello world</h1>
      </section>
    </main>
  );
}
