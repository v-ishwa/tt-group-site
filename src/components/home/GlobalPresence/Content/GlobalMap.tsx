import Image from "next/image";
import React from "react";
import mapBg from "../image/mapBg.webp";
// import us from "../image/flags/us.svg";
// import canada from "../image/flags/canada.svg";
// import india from "../image/flags/india.svg";
// import dubai from "../image/flags/dubai.svg";
// import china from "../image/flags/china.svg";
// import thailand from "../image/flags/thailand.svg";
// import hongkong from "../image/flags/hongkong.svg";
// import singapore from "../image/flags/singapore.svg";
// import japan from "../image/flags/japan.svg";

// import Pin from "./Pin";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// const countries = [
//   {
//     name: "USA",
//     image: us,
//     top: "42%",
//     left: "18%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "CANADA",
//     image: canada,
//     top: "22%",
//     left: "20%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "INDIA",
//     image: india,
//     top: "51%",
//     left: "67.5%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "DUBAI",
//     image: dubai,
//     top: "49%",
//     left: "60.5%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "CHINA",
//     image: china,
//     top: "42%",
//     left: "70.5%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "THAILAND",
//     image: thailand,
//     top: "52%",
//     left: "74%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "HONG KONG",
//     image: hongkong,
//     top: "45%",
//     left: "78%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "SINGAPORE",
//     image: singapore,
//     top: "60%",
//     left: "75%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "JAPAN",
//     image: japan,
//     top: "40%",
//     left: "84%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
// ];

const GlobalMap = () => {
  // useGSAP(() => {
  //   animatePin();
  // });

  return (
    <div className="flex w-full h-auto lg:h-[70vh] relative mt-10">
      <Image
        loading="lazy"
        src={mapBg}
        alt="services across the world"
        className="w-full h-full object-contain"
      />
      {/* <div className="absolute z-10 top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
        {countries.map((el, i) => (
          <Pin key={i} el={el} />
        ))}
      </div> */}
    </div>
  );
};

export default GlobalMap;
