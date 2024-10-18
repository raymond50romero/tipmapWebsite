'use client';
import React from 'react';
import EachTile from './eachTile';

export default function Tiles() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <span className="mr-auto">Filter</span>
      </div>
      <EachTile />
    </div>
  );
}
