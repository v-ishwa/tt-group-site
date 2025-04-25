import Image from "next/image";
import React from "react";
import indiaMap from "../image/indiaMapBg.webp";
// import india from "../image/flags/india.svg";
// import Pin from "./Pin";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import { animatePin } from "../_utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// const countries = [
//   {
//     name: "AMRITSAR",
//     image: india,
//     top: "23%",
//     left: "36.5%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "NEW DELHI",
//     image: india,
//     top: "36%",
//     left: "41%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "AHMEDABAD",
//     image: india,
//     top: "49%",
//     left: "33%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "KOLKATA",
//     image: india,
//     top: "52%",
//     left: "58%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "MUMBAI",
//     image: india,
//     top: "62%",
//     left: "34%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "PANAJI",
//     image: india,
//     top: "70%",
//     left: "35.5%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "HYDERABAD",
//     image: india,
//     top: "58%",
//     left: "43.5%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "TRICHY",
//     image: india,
//     top: "78%",
//     left: "43%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "BANGALORE",
//     image: india,
//     top: "70%",
//     left: "41%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "COIMBATORE",
//     image: india,
//     top: "80%",
//     left: "40%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "CALICUT",
//     image: india,
//     top: "77%",
//     left: "37%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "COCHIN",
//     image: india,
//     top: "85%",
//     left: "39.5%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "TRIVANDRUM",
//     image: india,
//     top: "88.5%",
//     left: "40.5%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
//   {
//     name: "CHENNAI",
//     image: india,
//     top: "73%",
//     left: "45%",
//     content: {
//       title: "Total Shipment",
//       value: "125,987",
//       subTitle: "in last 7 years",
//     },
//   },
// ];

const IndiaMap = () => {
  // useGSAP(() => {
  //   animatePin();
  // });

  return (
    <div className="flex w-full h-auto lg:h-[80vh] mt-16 relative">
      <Image
        loading="lazy"
        src={indiaMap}
        alt="services across the world"
        className="w-full h-full object-contain"
      />
      {/* <div className="absolute z-10 top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
        {countries.map((el, i) => (
          <Pin isIndia key={i} el={el} />
        ))}
      </div> */}
    </div>
  );
};

export default IndiaMap;
