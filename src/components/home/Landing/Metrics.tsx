"use client";

import cn from "@/utils";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import a1Logo from "./images/a1.webp";
import b1Logo from "./images/b1.webp";
import b2Logo from "./images/b2.webp";
import b3Logo from "./images/b3.webp";
import b4Logo from "./images/b4.webp";
import b5Logo from "./images/b5.webp";
import b6Logo from "./images/b6.webp";
import b7Logo from "./images/b7.webp";
import b8Logo from "./images/b8.webp";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

const metrics = [
  {
    id: 2,
    title: "200+",
    description: "PROFESSIONALS",
  },
  {
    id: 3,
    title: "3,000+",
    description: "FISHERMEN TRAINED",
  },
  {
    id: 4,
    title: "40+",
    description: "YEARS OF EXPERIENCE",
  },
];

const Metrics = () => {
  const metricsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        let current = 0;

        const animateCards = () => {
          if (current < metrics.length - 1) {
            current++;
          } else {
            current = 0;
          }

          gsap.to(".metric_card[data-active=true]", {
            duration: 0.5,
            top: "100%",
            translateY: "100%",
            translateX: "-100%",
            rotate: -90,
            ease: "power2.in",
          });

          const currentEl = document.querySelector(
            `.metric_card[data-id="${current}"]`
          );

          gsap.fromTo(
            currentEl,
            {
              top: "100%",
              translateY: "100%",
              translateX: "100%",
              rotate: 90,
            },
            {
              duration: 0.5,
              delay: 0.25,
              top: "50%",
              translateY: "-50%",
              translateX: "0%",
              rotate: [3, 6, 12][Math.floor(Math.random() * 3)],
              ease: "power2.out",
            }
          );

          currentEl?.setAttribute("data-active", "true");
        };

        gsap.to(metricsContainerRef.current, {
          opacity: 1,
          duration: 5,
          repeat: -1,
          onRepeat: animateCards,
        });
      });
    },
    { scope: metricsContainerRef }
  );

  return (
    <div
      ref={metricsContainerRef}
      className="absolute w-full h-full hidden lg:flex top-0 z-20 left-0 justify-center"
    >
      <div className="flex h-full w-1/2 relative">
        <div className="flex absolute top-1/2 left-0 items-center -rotate-12 bg-gray-50 -translate-y-1/2 shadow-sm flex-col p-5">
          <h6 className="font-bold text-xl">40+</h6>
          <span className="text-gray-500 text-xs mt-1 font-semibold">
            COUNTRIES
          </span>
          <div className="grid grid-cols-4 gap-3 mt-5">
            {[
              a1Logo,
              b1Logo,
              b2Logo,
              b3Logo,
              b4Logo,
              b5Logo,
              b6Logo,
              b7Logo,
              b8Logo,
            ].map((el, i) => (
              <div
                key={i}
                className={cn(
                  "col-span-1 w-full h-full aspect-square flex items-center justify-center",
                  {
                    "row-span-2 col-span-2": i === 0,
                  }
                )}
              >
                <Image
                  loading="lazy"
                  src={el}
                  alt={`logo-${i}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-full relative w-1/2 overflow-hidden">
        {metrics?.map((el, i) => (
          <div
            data-id={i}
            data-active={i === 0}
            key={el.id}
            className={cn(
              "flex metric_card absolute top-full right-24 bg-gray-50 translate-y-full shadow-sm flex-col p-5",
              {
                "top-1/2 -translate-y-1/2 rotate-12": i === 0,
              }
            )}
          >
            <h6 className="font-bold text-5xl">{el.title}</h6>
            <span className="text-gray-500 text-xs mt-1 font-semibold">
              {el.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
