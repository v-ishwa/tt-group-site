"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Item from "./Item";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const itemsData = [
  {
    id: 1,
    title: "Total Cargo Management",
    primaryColor: "68, 20, 29",
    content: [
      {
        title: "GHA Management",
        description:
          "One point of contact, Cost and time efficiency, Better control and visibility, Scalable and flexible operations",
      },
      {
        title: "Warehouse & Underwing Supervision",
        description:
          "One point of contact, Cost and time efficiency, Better control and visibility, Scalable and flexible operations",
      },
      {
        title: "Transportation",
        description:
          "One point of contact, Cost and time efficiency, Better control and visibility, Scalable and flexible operations",
      },
      {
        title: "Track & Trace",
        description:
          "One point of contact, Cost and time efficiency, Better control and visibility, Scalable and flexible operations",
      },
      {
        title: "Loadability & Loadmaster",
        description:
          "One point of contact, Cost and time efficiency, Better control and visibility, Scalable and flexible operations",
      },
    ],
    bgUrl: "/images/services/bg2.webp",
  },
  {
    id: 2,
    title: "Air Cargo Commercial Management",
    primaryColor: "12, 90, 70",
    content: [
      {
        title: "Sales & Marketing",
        description: "Attracting clients and promoting services",
      },
      {
        title: "Revenue Optimization",
        description: "Adjusting pricing and managing demand",
      },
      {
        title: "Capacity Management",
        description: "Making the best use of available cargo space",
      },
      {
        title: "Contract, RFP & Rate Handling",
        description: "Setting rates and managing agreements",
      },
      {
        title: "Route & network Expansion",
        description: "Identifying new business opportunities",
      },
      {
        title: "Interline Partnerships",
        description: "Collaborating with carriers and freight partners",
      },
    ],
    bgUrl: "/images/services/bg1.webp",
  },
  {
    id: 3,
    title: "GCC – Global Capability Center",
    primaryColor: "35, 43, 11",
    content: [
      {
        title: "Commercial Support",
        description:
          "Pricing, contracts, revenue management, and customer service",
      },
      {
        title: "Operational Coordination",
        description: "Capacity planning, route support, and AWB tracking",
      },
      {
        title: "Digital & IT Services",
        description: "System management, automation, and data analytics",
      },
      {
        title: "Finance & Compliance",
        description: "Billing, audit, regulatory support, and documentation",
      },
      {
        title: "Business Intelligence",
        description: "Performance monitoring, reporting, and forecasting",
      },
    ],
    bgUrl: "/images/services/bg3.webp",
  },
  {
    id: 4,
    title: "Skill Development",
    primaryColor: "22, 37, 100",
    content: [
      {
        title: "Logistics & Supply Chain Training",
        description:
          "Comprehensive training in areas such as freight forwarding, inventory management, transportation, warehousing, and supply chain optimization",
      },
      {
        title: "Professional Upskilling & Career Development",
        description:
          "Supports both entry-level learners and experienced professionals through workshops, refresher courses, and customized corporate training",
      },
      {
        title: "Industry-Aligned Curriculum",
        description:
          "All courses are developed in consultation with industry experts and are regularly updated to reflect the latest trends, technologies, and compliance standards—ensuring that learners remain competitive and job-ready.",
      },
    ],
    bgUrl: "/images/services/bg4.webp",
  },
];

const Stacks = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // ScrollTrigger.create({
      //   trigger: ".services_content",
      //   start: "top 90px",
      //   end: "bottom 80%",
      //   scrub: 0.5,
      //   pin: ".services_title",
      // });

      const stacks = document.querySelectorAll(".stack_item");
      const initialValues = {
        scale: 1 - stacks.length * 0.05,
        translateY: stacks.length * 3,
        stackItemHeight: stacks[0].clientHeight,
      };

      stacks.forEach((el, i) => {
        gsap.to(el.querySelector(".content"), {
          scale: initialValues.scale + i * 0.05,
          translateY: `-${initialValues.translateY - i * 3}%`,
          scrollTrigger: {
            trigger: ".services_content",
            start: `${0 + i * initialValues.stackItemHeight + 156}px 90px`,
            end: "bottom 80%",
            scrub: 0.5,
            pin: el,
          },
        });

        gsap.to(el.querySelector(".title"), {
          fontSize: "1.5rem",
          translateY: `-50%`,
          scrollTrigger: {
            trigger: ".services_content",
            start: `${0 + i * initialValues.stackItemHeight + 156}px 90px`,
            end: `${(i + 1) * initialValues.stackItemHeight}px 90px`,
            scrub: 0.5,
          },
        });
      });
    });
  });

  return (
    <div className="flex w-full flex-col gap-y-8 lg:gap-y-16 mt-10 lg:mt-20 px-5 lg:px-0">
      {itemsData.map((el) => (
        <Item
          key={el.id}
          content={el.content}
          primaryColor={el.primaryColor}
          title={el.title}
          bgUrl={el.bgUrl}
        />
      ))}
    </div>
  );
};

export default Stacks;
