"use client";

import React from "react";
import Content from "./Content";

const GlobalPresence = () => {
  return (
    <div className="flex w-full justify-center py-10 lg:py-30">
      <div className="container max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col w-full items-center">
          <h6 className="text-xs lg:text-sm text-brand font-semibold tracking-widest">
            OUR FOOTPRINTS
          </h6>
          <h2 className="text-3xl lg:text-5xl font-semibold text-center mt-4 leading-tight">
            Global presence
          </h2>
        </div>
        <Content />
      </div>
    </div>
  );
};

export default GlobalPresence;
