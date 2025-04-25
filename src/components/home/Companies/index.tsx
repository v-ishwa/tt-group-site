"use client";

import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import gsap from "gsap";
import WebCarousel from "./WebCarousel";
import { useMediaWidth } from "@/utils/useMediaWidth";
import MobileCarousel from "./MobileCarousel";
import ttSkillLogo from "./images/ttskill.webp";
import ttInsuranceLogo from "./images/ttinsurance.webp";
import ttTruckingLogo from "./images/tttrucking.webp";
import alamparaLogo from "./images/alampara.webp";
import surfturfLogo from "./images/surfturf.webp";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export interface ICompany {
  name: string;
  description: string;
  videoPoster: string;
  src: string;
  mp4Src: string;
  logo?: React.ReactNode;
  isActive: boolean;
  metric: {
    value: number | string;
    suffix: string;
    description: string;
  };
}

const companies: ICompany[] = [
  {
    name: "TT LOGISTICS",
    description:
      "TT Logistics and Cargo Pvt. Ltd. has delivered reliable, innovative logistics solutions for over 40 years. With a strong global presence and tech-driven operations, it remains a leader in the industry. Backed by a skilled team and a commitment to sustainability, TT Logistics moves the world forward.",
    videoPoster: "/images/companyVideoPoster/ttl.webp",
    src: "http://103.12.1.141/ttgroups/ttl_15sec.webm",
    mp4Src: "http://103.12.1.141/ttgroups/tt-logistics.mp4",
    isActive: true,
    metric: {
      value: 40,
      suffix: "+",
      description: "Years of Excellence",
    },
  },
  {
    name: "TT INSURANCE",
    logo: (
      <Image
        src={ttInsuranceLogo}
        alt="TT INSURANCE"
        className="h-[50px] w-auto"
      />
    ),
    description:
      "TT Insurance Broking Services Pvt. Ltd., established in 2005, offers reliable and innovative insurance solutions across sectors like manufacturing, logistics, education, and hospitality. Backed by a dedicated team, the company emphasizes precision and trust in risk management. With a growing client base, TT Insurance continues to redefine service excellence in the industry.",
    videoPoster: "/images/companyVideoPoster/ttinsurance.webp",
    src: "http://103.12.1.141/ttgroups/tt-insurance.webm",
    mp4Src: "http://103.12.1.141/ttgroups/tt-insurance.mp4",
    isActive: false,
    metric: {
      value: 4900,
      suffix: "+",
      description: "Policy Documents Issued",
    },
  },
  {
    name: "TT TRUCKING",
    logo: (
      <Image
        src={ttTruckingLogo}
        alt="TT TRUCKING"
        className="h-[50px] w-auto"
      />
    ),
    description:
      "Established in 2010, TT Aviation Handling Services Pvt. Ltd. (formerly TT Trucking) specializes in Custom Bonded and Non-Bonded Trucking, delivering secure and efficient transportation solutions across India. As a joint venture with Sagawa (EFL Group), the company leverages combined expertise to enhance service quality. With a dedicated workforce of 110, TT Aviation ensures timely, regulatory-compliant deliveries, continually evolving to meet the dynamic needs of India’s trucking sector.",
    videoPoster: "/images/companyVideoPoster/tttruck.webp",
    src: "http://103.12.1.141/ttgroups/tt-trucking.webm",
    mp4Src: "http://103.12.1.141/ttgroups/tt-trucking.mp4",
    isActive: false,
    metric: {
      value: "24/7",
      suffix: "",
      description: "Real-Time GPS Tracking",
    },
  },
  {
    name: "TT SKILL",
    logo: (
      <Image src={ttSkillLogo} alt="TT SKILL" className="h-[50px] w-auto" />
    ),
    description:
      "TT Skill, a division of the TT Group, delivers industry-aligned training programs across logistics, aviation, and supply chain management. With partnerships spanning top institutions like Great Lakes, Amrita Vishwa Vidyapeetham, and Singapore’s SUSS, it offers NSQF-aligned courses blending hands-on tools like ERP, WMS, and TMS. TT Skill empowers learners through flexible models, expert mentorship, and real-world exposure.",
    videoPoster: "/images/companyVideoPoster/ttskills.webp",
    src: "http://103.12.1.141/ttgroups/ttskills-16sec.webm",
    mp4Src: "http://103.12.1.141/ttgroups/tt-skills.mp4",
    isActive: false,
    metric: {
      value: "15k",
      suffix: "+",
      description: "Students Trained",
    },
  },
  {
    name: "THE ALAMPRA",
    logo: (
      <Image
        src={alamparaLogo}
        alt="THE ALAMPRA"
        className="h-[100px] w-auto"
      />
    ),
    description:
      "The Alampara is a luxury glamping retreat nestled along Tamil Nadu’s Coromandel Coast, offering an eco-conscious escape with four boutique tents, the Nila lagoon-view restaurant, and a private sandbar. Set across 50 acres of lush landscapes and tranquil backwaters, it’s a haven for nature lovers and water sports enthusiasts alike. Recognized as Condé Nast Traveller India’s “Hottest New Hotel of the Year 2022,” The Alampara blends barefoot luxury with serene coastal charm.",
    videoPoster: "/images/companyVideoPoster/alampara.webp",
    src: "http://103.12.1.141/ttgroups/tt-alampara.webm",
    mp4Src: "http://103.12.1.141/ttgroups/tt-alampara.mp4",
    isActive: false,
    metric: {
      value: 50,
      suffix: "+",
      description: "Acres of Coastal Bliss",
    },
  },
  {
    name: "SURFTURF",
    logo: (
      <Image src={surfturfLogo} alt="SURFTURF" className="h-[100px] w-auto" />
    ),
    description:
      "Surf Turf at Covelong Point is a vibrant coastal retreat blending adventure, culture, and relaxation. Founded in 2012 by Arun Vasu, it offers ocean-view rooms, an Italian restaurant, and the Covelong Point Surf School, providing activities like surfing, kayaking, and stand-up paddling. With its roots in the local fishing community, Surf Turf has become a hub for beach lovers and thrill-seekers alike.",
    videoPoster: "/images/companyVideoPoster/ttsurfing.webp",
    src: "http://103.12.1.141/ttgroups/tt-surfing.webm",
    mp4Src: "http://103.12.1.141/ttgroups/tt-surfing.mp4",
    isActive: false,
    metric: {
      value: 10,
      suffix: "+",
      description: "Surfing & Sustainable Hospitality",
    },
  },
  {
    name: "TT ADVENTURES",
    description:
      "TT Adventures is the experiential arm of the TT Group, dedicated to fostering ocean-based exploration and community-driven experiences. Rooted in the ethos of Surf Turf at Covelong Point, it offers immersive activities like surfing, kayaking, and stand-up paddling, all while promoting inclusivity and local engagement. Through its initiatives, TT Adventures inspires individuals to connect deeply with the sea and the vibrant culture surrounding it.",
    videoPoster: "/images/companyVideoPoster/ttadventure.webp",
    src: "http://103.12.1.141/ttgroups/tt-adventure.webm",
    mp4Src: "http://103.12.1.141/ttgroups/tt-adventure.mp4",
    isActive: false,
    metric: {
      value: "10",
      suffix: "+",
      description: "Building Ocean-First Experiences",
    },
  },
];

const Companies = () => {
  const width = useMediaWidth();
  const [activeCompany, setActiveCompany] = useState<number>();
  const [isAnimating, setIsAnimating] = useState(false);
  const isWeb = (width || 0) > 1024;

  return (
    <div className="container max-w-7xl mx-auto flex flex-col py-20 lg:py-30">
      <div className="flex flex-col w-full">
        <h6 className="text-xs lg:text-sm text-brand text-center lg:text-left font-semibold tracking-widest">
          THE TT GROUP ECOSYSTEM
        </h6>
        <div className="flex w-full justify-between mt-4 items-center">
          <h2 className="text-3xl lg:text-5xl text-center lg:text-left font-semibold leading-tight">
            Our companies <br className="hidden lg:flex" /> delivering
            exceptional value
          </h2>
          <div className="hidden lg:flex gap-x-5 text-white">
            <div
              onClick={() => {
                if (isAnimating) return;

                setIsAnimating(true);
                if (activeCompany === undefined) {
                  setActiveCompany(0);
                } else {
                  if (activeCompany === 0) {
                    setActiveCompany(companies.length - 1);
                  } else {
                    setActiveCompany((activeCompany || 1) - 1);
                  }
                }
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
                if (isAnimating) return;

                setIsAnimating(true);

                if (activeCompany === undefined) {
                  setActiveCompany(0);
                } else {
                  if (activeCompany === companies.length - 1) {
                    setActiveCompany(0);
                  } else {
                    setActiveCompany((activeCompany || 0) + 1);
                  }
                }
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
        </div>
        <>
          {width && (
            <>
              {isWeb ? (
                <WebCarousel
                  companies={companies}
                  activeCompany={activeCompany}
                  setActiveCompany={setActiveCompany}
                  isAnimating={isAnimating}
                  setIsAnimating={setIsAnimating}
                />
              ) : (
                <MobileCarousel companies={companies} />
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Companies;
