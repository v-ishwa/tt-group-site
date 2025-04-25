import React from "react";
import bg2880 from "./images/careers_bg2880.webp";
import bg1440 from "./images/careers_bg1440.webp";
import Image from "next/image";
import Button from "@/components/Button";

const Careers = () => {
  return (
    <div className="flex w-full justify-center lg:my-0">
      <div className="container max-w-7xl mx-auto relative py-10">
        <picture>
          <source srcSet={bg2880.src} media="(min-width: 1024px)" />
          <source srcSet={bg1440.src} media="(max-width: 1023px)" />
          <Image
            src={bg1440.src}
            alt="Careers"
            width={1440}
            height={416}
            className="w-full h-auto hidden lg:flex"
          />
        </picture>
        <div className="flex flex-col px-5 lg:px-0 items-center lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 w-full h-full justify-center">
          <h6 className="lg:text-sm text-xs text-brand font-semibold tracking-widest">
            CAREERS
          </h6>
          <h2 className="text-3xl lg:text-5xl font-semibold text-center mt-3 leading-tight">
            Build your future with us
          </h2>
          <p className="text-center mt-3 lg:text-base text-sm">
            Be part of a legacy that empowers people, drives innovation, and
            creates real impact.
          </p>
          <Button className="mt-10">Join Our Team</Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
