"use client";

import cn from "@/utils";
import React, { useState } from "react";
import GlobalMap from "./GlobalMap";
import IndiaMap from "./IndiaMap";

const Content = () => {
  const [selectedTab, setSelectedTab] = useState("global");

  return (
    <div className="flex flex-col mt-10 px-5 w-full items-center">
      <div className="flex w-full justify-center">
        <div
          onClick={() => setSelectedTab("global")}
          className={cn(
            "flex py-3 px-16 lg:px-20 text-xs lg:text-sm font-medium cursor-pointer border bg-gray-100 border-gray-500",
            {
              "bg-black text-white border-black": selectedTab === "global",
            }
          )}
        >
          Global
        </div>
        <div
          onClick={() => setSelectedTab("india")}
          className={cn(
            "flex py-3 px-16 lg:px-20 text-xs lg:text-sm font-medium cursor-pointer bg-gray-100 border border-gray-500",
            {
              "bg-black text-white border-black": selectedTab === "india",
            }
          )}
        >
          India
        </div>
      </div>
      {selectedTab === "global" && <GlobalMap />}
      {selectedTab === "india" && <IndiaMap />}
    </div>
  );
};

export default Content;
