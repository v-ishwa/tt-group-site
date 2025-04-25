"use client";

import React, { useRef } from "react";
import ImgCard from "./ImgCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const MakingDiff = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
          trigger: container.current,
          start: "top 50%",
          onEnter: () => {
            gsap.to([".mdc_left"], {
              height: 0,
              duration: 0.3,
              ease: "power1.inOut",
              stagger: 0.15,
            });

            gsap.to([".mdc_right"], {
              height: 0,
              duration: 0.3,
              delay: 0.15,
              ease: "power1.inOut",
              stagger: 0.15,
            });
          },
        });
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="container max-w-7xl mx-auto flex flex-col items-center py-10 lg:py-30"
    >
      <h6 className="text-xs ss lg:text-sm text-brand font-semibold tracking-widest">
        CORPORATE SOCIAL RESPONSIBILITY
      </h6>
      <h2 className="text-3xl lg:text-5xl font-semibold mt-4 text-center leading-tight">
        Making a difference
      </h2>
      <p className="text-gray-700 text-center mt-4 max-w-4xl leading-relaxed px-5 lg:px-0">
        TT Group is committed to sustainability through solar energy adoption,
        waste management, and coastal conservation. Our efforts include beach
        clean-ups and innovative drainage systems to protect marine life.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-9  w-full gap-4 mt-10 lg:mt-16 px-5 lg:px-0">
        <div className="col-span-1 flex flex-col gap-y-4 lg:pt-14 pt-0">
          <ImgCard src="/images/makingDiff/1.webp" />
          <ImgCard src="/images/makingDiff/2.webp" />
        </div>
        <div className="col-span-1 flex flex-col gap-y-4">
          <ImgCard src="/images/makingDiff/3.webp" />
          <ImgCard src="/images/makingDiff/4.webp" />
        </div>
        <div className="col-span-1 flex flex-col gap-y-4 lg:pt-16 pt-0">
          <ImgCard src="/images/makingDiff/5.webp" />
        </div>
        <div className="col-span-1 flex flex-col gap-y-4 lg:pt-4 pt-0">
          <ImgCard src="/images/makingDiff/6.webp" />
        </div>
        <div className="col-span-1 flex flex-col gap-y-4 lg:pt-12 pt-0">
          <ImgCard src="/images/makingDiff/7.webp" />
        </div>
        <div className="col-span-1 flex flex-col gap-y-4 lg:pt-4 pt-0">
          <ImgCard src="/images/makingDiff/8.webp" />
        </div>
        <div className="col-span-1 flex flex-col gap-y-4 lg:pt-16 pt-0">
          <ImgCard src="/images/makingDiff/9.webp" />
          <ImgCard src="/images/makingDiff/10.webp" />
        </div>
        <div className="col-span-1 flex flex-col gap-y-4">
          <ImgCard src="/images/makingDiff/11.webp" />
          <ImgCard src="/images/makingDiff/12.webp" />
        </div>
        <div className="col-span-1 flex flex-col gap-y-4 lg:pt-14 pt-0">
          <ImgCard src="/images/makingDiff/13.webp" />
        </div>
      </div>
    </div>
  );
};

export default MakingDiff;
