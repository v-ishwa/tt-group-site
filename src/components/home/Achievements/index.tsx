"use client";

import React, { useState } from "react";
import imageOne from "./images/1.webp";
import imageTwo from "./images/2.webp";
import imageThree from "./images/3.webp";
import imageFour from "./images/4.webp";
import imageFive from "./images/5.webp";
import imageSix from "./images/6.webp";

import certImage1 from "./images/cert1.webp";
import certImage2 from "./images/cert2.webp";
import certImage3 from "./images/cert3.webp";
import certImage4 from "./images/cert4.webp";
import certImage5 from "./images/cert5.webp";

import Image from "next/image";
import cn from "@/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const containerRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("certificate");

  useGSAP(
    () => {
      gsap.to(".logo_img", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        translateY: 0,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="container max-w-7xl mx-auto flex flex-col py-20 lg:py-30"
    >
      <div className="flex flex-col w-full">
        <h6 className="text-xs lg:text-sm text-brand text-center lg:text-left font-semibold tracking-widest">
          ACHIEVEMENTS
        </h6>
        <h2 className="text-3xl mt-4 lg:text-5xl text-center lg:text-left font-semibold leading-tight lg:px-0 px-5">
          Honoring our journey with <br className="hidden lg:flex" />
          recognitions and certifications
        </h2>
        <div className="grid w-full lg:border border-gray-300 grid-cols-12 mt-5 lg:mt-10 lg:px-0 px-5">
          <div className="flex col-span-12 lg:col-span-5 flex-col p-5">
            <div className="flex w-full justify-center lg:justify-start">
              <div
                onClick={() => setSelectedTab("certificate")}
                className={cn(
                  "flex py-2 lg:py-3 px-10 lg:px-20  text-sm font-medium cursor-pointer border bg-gray-100 border-gray-500",
                  {
                    "bg-black text-white border-black":
                      selectedTab === "certificate",
                  }
                )}
              >
                Certificates
              </div>
              <div
                onClick={() => setSelectedTab("award")}
                className={cn(
                  "flex py-2 lg:py-3 px-10 lg:px-20 text-sm font-medium cursor-pointer bg-gray-100 border border-gray-500",
                  {
                    "bg-black text-white border-black": selectedTab === "award",
                  }
                )}
              >
                Awards
              </div>
            </div>
            <div className="flex-col hidden lg:flex mt-10">
              {selectedTab === "certificate" ? (
                <>
                  <h6 className="font-medium">
                    Certified for Quality. Trusted for Reliability.
                  </h6>
                  <p className="mt-1">
                    Our commitment to quality, innovation, and impact has earned
                    us several prestigious awards. These recognitions reflect
                    our dedication to excellence and drive us to reach new
                    heights.
                  </p>
                </>
              ) : (
                <div className="flex flex-col">
                  <h6 className="font-medium">
                    Recognized for Excellence. Honored for Impact.
                  </h6>
                  <p className="mt-1">
                    Honorary Consul General for Sweden (South India) and
                    Chairman TT Group Mr.Arun Vasu receives{" "}
                    <b>
                      {" "}
                      &apos;Knight of the Royal Order of the Polar Star Class
                      l&apos;
                    </b>{" "}
                    from the King of Sweden, King Carl XVI Gustaf in May 5, 2015
                    <br /> <br />
                    TT Group has been recognised with the prestigious{" "}
                    <b>
                      CSR Award at the 5th Aviation Cargo Express South East
                      Conclave{" "}
                    </b>
                    on November 27th at Hilton Hotel, Chennai.
                  </p>
                </div>
              )}
            </div>
          </div>
          {selectedTab === "certificate" ? (
            <div className="grid grid-cols-12 col-span-12 lg:col-span-7">
              {[
                { id: 1, img: imageOne },
                { id: 2, img: imageTwo },
                { id: 3, img: imageThree },
                { id: 4, img: imageFour },
                { id: 5, img: imageFive },
                { id: 6, img: imageSix },
              ].map((el, index) => (
                <div
                  key={el.id}
                  className={cn(
                    "flex col-span-4 border-l px-5 lg:px-10 border-gray-300 justify-center items-center aspect-square",
                    {
                      "border-t": index >= 3,
                      "lg:border-l border-l-0": index % 3 === 0,
                    }
                  )}
                >
                  <Image
                    className="logo_img"
                    src={el.img}
                    alt={"achievement" + index}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-12 col-span-12 lg:col-span-7">
              {[
                { id: 7, img: certImage4 },
                { id: 8, img: certImage1 },
                { id: 9, img: certImage3 },
                { id: 10, img: certImage2 },
                { id: 11, img: certImage5 },
              ].map((el, index) => (
                <div
                  key={el.id}
                  className={cn(
                    "flex border-l relative border-gray-300 justify-center items-center",
                    {
                      "border-t": index > 1,
                      "row-span-1 col-span-4": [8, 9].includes(el.id),
                      "row-span-2 col-span-8 h-full border-l-0 lg:border-l":
                        el.id === 7,
                      "row-span-1 col-span-6 h-[200px]": [10, 11].includes(
                        el.id
                      ),
                      "aspect-square": [7, 8, 9].includes(el.id),
                      "border-l-0 lg:border-l": el.id === 10,
                    }
                  )}
                >
                  <Image
                    fill
                    className={cn(
                      "logo_img w-full h-full object-contain p-3 lg:px-10"
                    )}
                    src={el.img}
                    alt={"achievement" + index}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
