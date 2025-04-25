"use client";

import React from "react";
import imageOne from "./images/1.webp";
import imageTwo from "./images/2.webp";
import imageThree from "./images/3.webp";
import imageFour from "./images/4.webp";
import imageFive from "./images/5.webp";
import imageSix from "./images/6.webp";
import imageSeven from "./images/7.webp";
import imageEight from "./images/8.webp";
import imageNine from "./images/9.webp";
import imageTen from "./images/10.webp";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Clients = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".clients_container", {
        translateX: "-20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          end: "top top",
          scrub: 0.5,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex w-full py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto items-center flex flex-col">
        {/* <h5 className="text-lg font-medium">
          The world&apos;s best companies trust Stellar.
        </h5> */}
        <div className="flex w-full overflow-hidden lg:overflow-visible max-w-screen">
          <div className="flex clients_container w-max gap-x-16 lg:gap-x-32">
            {[
              imageOne,
              imageTwo,
              imageThree,
              imageFour,
              imageFive,
              imageSix,
              imageSeven,
              imageEight,
              imageNine,
              imageTen,
            ].map((image, index) => (
              <div
                key={index}
                className="flex w-max justify-center items-center"
              >
                <Image
                  src={image}
                  loading="lazy"
                  className="h-8 w-auto max-h-8"
                  alt={`Client ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
