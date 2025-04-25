import Button from "@/components/Button";
import React from "react";
import Stacks from "./Stacks";
const Services = () => {
  return (
    <section
      id="services"
      className="container max-w-7xl mx-auto flex flex-col  pt-10 lg:pt-30 pb-20 lg:pb-80"
    >
      <div className="flex flex-col w-full services_content">
        <div className="flex flex-col lg:items-start items-center w-full services_title">
          <h6 className="text-xs lg:text-sm text-brand font-semibold tracking-widest">
            OUR SERVICES
          </h6>
          <div className="flex w-full flex-col lg:flex-row  lg:justify-between  mt-4 items-center">
            <h2 className="text-3xl lg:text-5xl font-semibold text-center lg:text-left leading-tight px-2 lg:px-0">
              Integrated global <br className="lg:flex hidden" /> services
            </h2>
            <Button className="hidden lg:flex">View All Services</Button>
          </div>
        </div>
        <Stacks />
      </div>
    </section>
  );
};

export default Services;
