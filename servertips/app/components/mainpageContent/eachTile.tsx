"use client";
import React from "react";
import defaultRestaurant from "../../../public/static/images/restaurant_icon.webp";
import Image from "@/node_modules/next/image";

export default function EachTile() {
  return (
    <div className="grid h-[12rem] w-[80%] cursor-pointer grid-cols-3 grid-rows-3 rounded-[15px] border-4">
      <div className="row-span-3 h-full w-full border-r object-contain">
        <Image
          src={defaultRestaurant}
          alt="Default restaurant icon"
          className="row-span-3 h-full w-full object-contain"
        />
      </div>
      <div className="col-span-2 col-start-2 flex flex-row justify-between gap-4 p-[1rem]">
        <div>
          <h3 className="text-4xl">Name of Restaurant</h3>
          <p>Adress</p>
        </div>
        <div>
          <span>Overall rating</span>
          <p>Num of ratings</p>
        </div>
      </div>
      <div className="col-span-2 col-start-2 row-span-2 flex flex-col items-center justify-evenly p-[1rem]">
        <div className="flex w-full flex-row justify-between">
          <span>Ovr. Work env</span>
          <span>Ovr. Clientele</span>
          <span>Money</span>
        </div>
        <div className="flex w-full justify-start">
          <span>Ovr. guest rating</span>
        </div>
      </div>
    </div>
  );
}
