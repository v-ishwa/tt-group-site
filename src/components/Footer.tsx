import { Insta, Linkedin, Logo, TTLogo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-black  text-white">
      <div className="container max-w-7xl mx-auto flex flex-col">
        <div className="grid grid-cols-12 w-full lg:px-0 px-5">
          <div className="flex col-span-12 lg:col-span-4 lg:row-span-2 pb-5 lg:border-b lg:border-r pt-20 border-gray-600">
            <Image
              src={Logo.src}
              alt="TT Group"
              width={330}
              height={72}
              className="brightness-0 h-12 w-auto invert-100"
            />
          </div>
          <div className="flex col-span-12 lg:col-span-4 gap-y-4 lg:pl-10 lg:row-span-4 flex-col lg:pb-10 lg:border-b lg:border-r pt-10 lg:pt-20 border-gray-600">
            {[
              {
                label: "About",
                link: "/",
              },
              {
                label: "Services",
                link: "/",
              },
              {
                label: "Our Companies",
                link: "/",
              },
              {
                label: "Contact",
                link: "/",
              },
            ].map((el) => (
              <Link
                className="text-white hover:text-brand"
                key={el.label}
                href={el.link}
              >
                {el.label}
              </Link>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 lg:row-span-5 flex-col flex pt-10 lg:pt-20 relative overflow-hidden lg:pl-10 order-last lg:order-none">
            <Image
              className="absolute bottom-0 right-0 z-0 brightness-[15%]"
              src={TTLogo.src}
              alt="TT Group"
              width={250}
              height={250}
            />
            <h2 className="text-2xl z-10 font-light leading-tight text-gray-300">
              Rooted in values. Growing with purpose. Serving globally
            </h2>
            <Button className="mt-5 z-10 bg-brand">Get in touch</Button>
            <div className="flex w-full z-10 justify-between mt-30 items-center pb-5">
              <div className="flex text-xs">
                <span>© 2025 TT Group, All rights reserved&nbsp; • &nbsp;</span>
                <Link href="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="flex col-span-12 lg:col-span-4 lg:row-span-3 lg:border-r gap-y-4 border-gray-600 pt-10 flex-col">
            <Link
              href={"https://maps.app.goo.gl/PCA76gf1k6SMtgTE6"}
              target="_blank"
              className="flex items-center gap-x-2"
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
                </svg>
              </div>
              <span>
                Block B, Clear Water Apartments Chinnandikuppam Palla Street,
                Vettuvankeni, East Coast Road, Injambakkam, Chennai, Tamil Nadu
              </span>
            </Link>
            <Link
              href="tel:04469229400"
              target="_blank"
              className="flex items-center gap-x-2"
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path>
                </svg>
              </div>
              <span>044 - 6922 9400</span>
            </Link>
            <Link
              target="_blank"
              href="mailto:enquiry@ttgroupglobal.com"
              className="flex items-center gap-x-2"
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z"></path>
                </svg>
              </div>
              <span>enquiry@ttgroupglobal.com</span>
            </Link>
          </div>
          <div className="flex col-span-12 lg:col-span-4 lg:row-span-1 lg:border-r border-gray-600">
            <div className="flex items-center gap-x-6 lg:pl-10 pt-10 lg:pb-5">
              <Link href="/">
                <Image
                  src={Linkedin.src}
                  alt="Linkedin"
                  width={24}
                  height={24}
                />
              </Link>
              {/* <Link href="/">
                <Image src={Twitter.src} alt="Twitter" width={24} height={24} />
              </Link> */}
              <Link href="/">
                <Image src={Insta.src} alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
