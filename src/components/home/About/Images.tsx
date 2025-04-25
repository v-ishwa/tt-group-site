"use client";

import Image from "next/image";
import React, { useRef } from "react";
import img1 from "./images/1.webp";
import img2 from "./images/2.webp";
import img3 from "./images/3.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Images = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 70%",
          onEnter: () => {
            gsap.to(containerRef.current, {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            });

            document.querySelectorAll(".about_item").forEach((el, i) => {
              gsap.to(el, {
                width: "33.33%",
                duration: 0.5,
                ease: "power2.out",
                delay: i * 0.5,
              });

              const overlay = el.querySelector(".overlay_item");

              if (overlay) {
                gsap.to(overlay, {
                  backgroundColor: "rgba(0,0,0,0.3)",
                  duration: 0.5,
                  ease: "power2.out",
                  delay: i * 0.5,
                });

                gsap.to(overlay.querySelectorAll(".overlay_text"), {
                  opacity: 1,
                  duration: 0.5,
                  ease: "power1.out",
                  stagger: 0.1,
                  delay: i * 0.5,
                });
              }
            });
          },
        });
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <>
      <div
        ref={containerRef}
        className="opacity-100 lg:opacity-0 flex lg:flex-row flex-col w-full h-max lg:h-96 gap-4 mt-8 lg:mt-16 max-w-5xl lg:px-0 px-5"
      >
        <div className="w-full lg:w-20 about_item relative">
          <div className="absolute overlay_item z-10 top-0 justify-end flex flex-col p-6 left-0 w-full h-full bg-black/70">
            <h3 className="text-white overlay_text text-lg w-max font-bold opacity-100 lg:opacity-0">
              TT Krishnamachari
            </h3>
            <p className="text-white overlay_text font-medium w-max text-sm mt-1 opacity-100 lg:opacity-0">
              Founder,Economic Reformer & Nation Builder
            </p>
          </div>
          <Image
            src={img1}
            alt="TT Krishnamachari"
            className="w-full h-full object-cover grayscale-100"
          />
        </div>
        <div className="w-full lg:w-20 about_item relative">
          <div className="absolute overlay_item z-10 top-0 left-0 w-full flex flex-col justify-end p-6 h-full bg-black/70">
            <h3 className="text-white overlay_text text-lg w-max font-bold opacity-100 lg:opacity-0">
              TT Vasu
            </h3>
            <p className="text-white overlay_text font-medium w-max text-sm mt-1 opacity-100 lg:opacity-0">
              Strategic Pioneer & Hospitality Innovator
            </p>
          </div>
          <Image
            src={img2}
            alt="TT Vasu"
            className="w-full h-full object-cover grayscale-100"
          />
        </div>
        <div className="w-full lg:w-20 about_item relative">
          <div className="absolute overlay_item z-10 top-0 left-0 w-full flex flex-col justify-end p-6 h-full bg-black/70">
            <h3 className="text-white overlay_text text-lg w-max font-bold opacity-100 lg:opacity-0">
              Arun Vasu
            </h3>
            <p className="text-white overlay_text font-medium w-max text-sm mt-1 opacity-100 lg:opacity-0">
              Global Business Leader & Surfing Advocate
            </p>
          </div>
          <Image
            src={img3}
            alt="Arun Vasu"
            className="w-full h-full object-cover object-left-top grayscale-100"
          />
        </div>
      </div>
    </>
  );
};

export default Images;
