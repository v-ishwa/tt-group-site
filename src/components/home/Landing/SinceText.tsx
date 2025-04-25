"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SinceText = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        backgroundImage:
          "linear-gradient(77.68deg,#e2002a -21.74%,#ffffff -11.28%,#e2002a 1.09%)",
      },
      {
        backgroundImage:
          "linear-gradient(79.56deg, #E2002A 95.83%, #FFFFFF 109.41%, #E2002A 125.46%)",
        duration: 0.7,
        ease: "power1.inOut",
        repeat: -1,
        repeatDelay: 2,
      }
    );
  });

  return (
    <span ref={textRef} className="landing_since_text">
      Since 1984
    </span>
  );
};

export default SinceText;
