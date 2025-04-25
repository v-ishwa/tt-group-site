import React from "react";
import SinceText from "./SinceText";
import Globe from "./Globe";
import Metrics from "./Metrics";
import Button from "@/components/Button";
const Landing = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col ">
      <div className="flex items-center flex-col pt-10 lg:pb-10 pb-0  lg:py-20">
        <div className="flex flex-col items-center max-w-3xl px-3 lg:px-0">
          <span className="text-xs lg:text-base bg-gray-100 shadow-md rounded-full  py-2 px-6">
            Welcome to TT Group-Promise Kept
          </span>
          <h1 className="text-3xl lg:text-6xl font-semibold mt-4 text-center leading-tight">
            Global Excellence
            <br className="lg:hidden" />
            Across Continents&nbsp;
            <br className="lg:hidden" />
            <SinceText />
          </h1>
          <p className="text-gray-500 text-center mt-3">
            A legacy of trust and innovation driving seamless solutions in
            cargo, insurance, capability centers, hospitality, and skills
            development on a global scale.
          </p>
          <Button className="mt-4 lg:mt-8">Explore Services</Button>
        </div>
        <div className="relative w-full flex justify-center h-[300px] lg:h-[400px]">
          <Metrics />
          <Globe />
        </div>
      </div>
    </div>
  );
};

export default Landing;
