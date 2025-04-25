"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import skyCargo from "./images/Emirates SkyCargo.webp";
import airways from "./images/Etihad Airways.webp";
import iagCargo from "./images/IAG Cargo.webp";
import kuehne from "./images/Kuehne Nagel.webp";
import philOrient from "./images/Phili Orient.webp";
import Image from "next/image";

const content = [
  {
    client_logo: "Emirates SkyCargo",
    client_logo_url: skyCargo,
    review:
      "Well Co-ordinated and good to see the prompt responses from Mr.Debajyoti and his team in Hyderabad. Much Appreciated.",
    contact_person_name: "Laurence Jacobi",
    contact_person_designation:
      "Cargo Manager - Telengana & Andhra Pradesh Emirates Sky Cargo",
  },
  {
    client_logo: "Etihad Airways",
    client_logo_url: airways,
    review:
      "Thank you for your on time service and regular updates, this was really high professional way you have displayed in this service.",
    contact_person_name: "Mohammed Shabeeb.P",
    contact_person_designation: "Cargo Revenue Management Analyst",
  },
  {
    client_logo: "Etihad Airways",
    client_logo_url: airways,
    review:
      "Thank you very much for all the support and efforts to make this 72 + Tons movement a success.",
    contact_person_name: "Ajay Malhotra",
    contact_person_designation:
      "Area Manager, ISC, Operations and Delivery, Etihad Cargo",
  },
  {
    client_logo: "Phili Orient",
    client_logo_url: philOrient,
    review:
      "We would like to thank Mr.Arun and Mr.Govindarajan for having such professional officers in the organization. The employees are good in understanding the customer business needs and delivering to the expectation.",
    contact_person_name: "J Fairoz Ahmed",
    contact_person_designation: "Managing Director, Phili Orient",
  },
  {
    client_logo: "Etihad Airways",
    client_logo_url: airways,
    review:
      "Thank you and your team for all the much needed support. It was a very critical and time sensitive Charter and was accomplished commendably.",
    contact_person_name: "Morgan D'Souza",
    contact_person_designation: "Manager Charter Sales, Etihad Cargo",
  },
  {
    client_logo: "Kuehne+Nagel",
    client_logo_url: kuehne,
    review:
      "We would like to extend our appreciation for the amazing work done by you & your entire team. Thank you for all your efforts to reach the trucks on time.",
    contact_person_name: "Suresh Elumalai",
    contact_person_designation:
      "Deputy Manager - Air Logistics(CGL) Kuehne + Nagel Pvt. Ltd.",
  },
  {
    client_logo: "IAG Cargo",
    client_logo_url: iagCargo,
    review:
      "We are happy to write this note of appreciation for shipments between the states. Your trucks were moved to the respective destination to connect on wards as booked which is great. Big thanks to the team for coordinating and ensuring a seamless movement till handover.",
    contact_person_name: "Arvind Ramakrishnan",
    contact_person_designation:
      "Key Account Manager, Cargo Commercial - South India, IAG Cargo",
  },
  {
    client_logo: "Etihad Airways",
    client_logo_url: airways,
    review:
      "Though the 32 ulds took much time to load, I did realize the loading was very efficient, fast and safely handled by the team. As ensured by you and your team, every update was provided by your staff every hour. Please do convey my thanks to all the staff who involved in this handling.",
    contact_person_name: "Clement Rowland",
    contact_person_designation:
      "Cargo Supervisor, MAA, Operations and Delivery, Etihad Cargo",
  },
  {
    client_logo: "Emirates SkyCargo",
    client_logo_url: skyCargo,
    review:
      "We are delighted to inform that the team led by Mr.Debajoyti, has done a marvellous job. They have managed to uplift 97 tons of cargo to BLR within short notice. On behalf of our CM",
    contact_person_name: "Lionel Stany Pereira",
    contact_person_designation:
      "Cargo Operations Manager, Emirates Sky Cargo, Chennai",
  },
];

const ClientReviews = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1,
        },
      },
    },
  });

  const ActionButtons = () => (
    <div className="flex gap-x-5 text-white">
      <div
        onClick={() => {
          instanceRef.current?.prev();
        }}
        className="bg-neutral-800 w-12 cursor-pointer h-12 flex justify-center items-center"
      >
        <svg
          width="26"
          height="23"
          viewBox="0 0 26 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7916 22.6328C11.063 22.883 11.4218 23.0166 11.7907 23.0046C12.1596 22.9926 12.509 22.8361 12.7635 22.5688C13.018 22.3015 13.1572 21.9448 13.1511 21.5758C13.145 21.2067 12.994 20.8549 12.7308 20.5962L5.05048 13.2872L24.271 12.9517C24.6439 12.9452 24.9989 12.7908 25.258 12.5225C25.5171 12.2543 25.659 11.894 25.6525 11.5211C25.646 11.1482 25.4916 10.7932 25.2233 10.5341C24.955 10.275 24.5948 10.1331 24.2219 10.1396L5.00983 10.475L12.4221 2.91245C12.6761 2.64469 12.8147 2.2878 12.808 1.91876C12.8012 1.54973 12.6496 1.19815 12.386 0.939889C12.1223 0.681622 11.7676 0.537376 11.3985 0.538279C11.0294 0.53918 10.6755 0.685157 10.4131 0.944709L0.843707 10.7066C0.680767 10.873 0.552517 11.0702 0.466409 11.2866C0.380302 11.5029 0.338053 11.7343 0.342117 11.9671C0.346182 12.2 0.396479 12.4297 0.490086 12.643C0.583693 12.8562 0.718744 13.0488 0.887393 13.2094L10.7916 22.6328Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div
        onClick={() => {
          instanceRef.current?.next();
        }}
        className="bg-neutral-800 w-12 cursor-pointer h-12 flex justify-center items-center"
      >
        <svg
          width="26"
          height="23"
          viewBox="0 0 26 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3974 0.89128C15.1305 0.636348 14.774 0.496572 14.405 0.502112C14.0359 0.507651 13.6839 0.658064 13.4247 0.920892C13.1656 1.18372 13.0202 1.53789 13.0198 1.90699C13.0195 2.27608 13.1643 2.6305 13.423 2.89378L20.9746 10.3357L1.75113 10.3357C1.37817 10.3357 1.02049 10.4838 0.756765 10.7475C0.493042 11.0113 0.344883 11.3689 0.344883 11.7419C0.344883 12.1149 0.493042 12.4726 0.756765 12.7363C1.02049 13 1.37817 13.1482 1.75113 13.1482L20.9661 13.1482L13.423 20.5802C13.1643 20.8435 13.0195 21.1979 13.0198 21.567C13.0202 21.9361 13.1656 22.2902 13.4247 22.5531C13.6839 22.8159 14.0359 22.9663 14.405 22.9719C14.774 22.9774 15.1305 22.8376 15.3974 22.5827L25.1357 12.9892C25.3015 12.8257 25.4332 12.6309 25.523 12.416C25.6129 12.2012 25.6592 11.9706 25.6592 11.7377C25.6592 11.5048 25.6129 11.2742 25.523 11.0594C25.4332 10.8445 25.3015 10.6497 25.1357 10.4861L15.3974 0.89128Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="flex w-full justify-center bg-black py-10 lg:py-30">
      <div className="container max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col w-full items-center lg:items-start">
          <h6 className="lg:text-sm text-xs text-white font-semibold tracking-widest">
            OUR TESTIMONIALS
          </h6>
          <div className="flex w-full lg:flex-row flex-col items-center justify-between  mt-4">
            <h2 className="text-3xl lg:text-5xl text-white font-semibold w-full text-center lg:text-left lg:w-1/3 leading-tight">
              Our client reviews
            </h2>
            <div className="lg:flex hidden">
              <ActionButtons />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col px-5 lg:px-0">
          <div ref={sliderRef} className="keen-slider mt-10 lg:mt-16">
            {content.map((el, i) => (
              <div
                key={i}
                className="keen-slider__slide justify-between max-h-[450px] bg-neutral-800 flex flex-col text-white p-5"
              >
                <div className="flex flex-col">
                  <Image
                    src={el.client_logo_url}
                    alt={el.client_logo}
                    className="h-18 w-18"
                  />
                  <span className="mt-4 text-lg">{el.review}</span>
                </div>
                <div className="flex flex-col mt-5">
                  <h4 className="text-xl font-semibold">
                    {el.contact_person_name}
                  </h4>
                  <span className="mt-2 text-sm">
                    {el.contact_person_designation}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden flex justify-center mt-5">
            <ActionButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
