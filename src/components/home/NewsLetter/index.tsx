import { ArrowRight } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex w-full justify-center bg-gray-50 py-10 lg:py-30">
      <div className="container max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col w-full items-center">
          <h6 className="text-xs lg:text-sm text-brand font-semibold tracking-widest">
            IN MEDIA
          </h6>
          <h2 className="text-3xl lg:text-5xl font-semibold text-center mt-4 leading-tight">
            Latest news & insights
          </h2>

          <div className="w-full grid grid-cols-4 mt-10 lg:mt-16 h-max lg:h-[70vh] gap-5 max-h-5xl px-5 lg:px-0">
            <div className="flex col-span-4 min-h-[250px] lg:min-h-full lg:col-span-2 lg:row-span-2 bg-white gap-5 flex-col ">
              <div className="flex relative w-full h-full min-h-[250px] lg:h-1/2 p-4 bg-gray-100">
                <Image
                  className="flex w-full h-full object-contain"
                  src={
                    "https://media.assettype.com/newindianexpress%2F2025-04-10%2F9gemwwkg%2FArun-Vasu.jpg?w=1024&auto=format%2Ccompress&fit=max"
                  }
                  fill
                  alt="Sports ministry recognition will help surfing grow: SFI
                      chief Arun"
                />
              </div>
              <div className="flex w-full h-full lg:h-1/2 flex-col justify-between p-4">
                <div className="flex flex-col">
                  <h6 className="text-gray-500 text-xs">INDIAN EXPRESS</h6>
                  <Link
                    target="_blank"
                    href="https://www.newindianexpress.com/sport/other/2025/Apr/11/sports-ministry-recognition-will-help-surfing-grow-sfi-chief-arun"
                    className=" mt-2"
                  >
                    <h2 className="lg:text-3xl text-lg line-clamp-3">
                      Sports ministry recognition will help surfing grow: SFI
                      chief Arun
                    </h2>
                  </Link>
                  <div className="hidden mt-3 lg:flex">
                    <p className="line-clamp-3 ">
                      After getting approval from government late last month,
                      Surfing Federation of India president opens up about the
                      challenges that the federation and the surfers have faced
                      over the years and how the ministry{"'"}s backing could
                      help take the sport to the next level
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <Link
                    className="flex items-center px-3 py-1 hover:bg-gray-100 lg:text-base text-xs"
                    target="_blank"
                    href="https://www.newindianexpress.com/sport/other/2025/Apr/11/sports-ministry-recognition-will-help-surfing-grow-sfi-chief-arun"
                  >
                    Read More
                    <Image
                      src={ArrowRight}
                      alt="Read More"
                      className="w-4 h-4 ml-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex col-span-4 min-h-[250px] lg:min-h-full lg:col-span-2 lg:flex-row flex-col row-span-1 bg-white gap-5">
              <div className="flex relative w-full min-h-[250px] lg:w-1/2 h-full bg-gray-100 p-4">
                <Image
                  className="flex w-full h-full object-contain"
                  src={
                    "https://bl-i.thgim.com/public/incoming/dobbmy/article69209889.ece/alternates/LANDSCAPE_1200/AFP_36XJ4CU.jpg"
                  }
                  fill
                  alt="TT Group, AFCOM Cargo to introduce Chennai-Colombo-Male-Chennai route
"
                />
              </div>
              <div className="flex w-full lg:w-1/2 h-full flex-col justify-between  p-4">
                <div className="flex flex-col">
                  <h6 className="text-gray-500 text-xs">BUSINESS LINE</h6>
                  <Link
                    href="https://www.thehindubusinessline.com/economy/logistics/tt-group-afcom-cargo-to-introduce-chennai-colombo-male-chennai-route/article69209817.ece"
                    target="_blank"
                    className="mt-2"
                  >
                    <h2 className="lg:text-3xl text-lg line-clamp-3">
                      TT Group, AFCOM Cargo to introduce
                      Chennai-Colombo-Male-Chennai route
                    </h2>
                  </Link>
                  <div className="hidden mt-3 lg:flex">
                    <p className="line-clamp-3 ">
                      Under this agreement, TT Group will oversee global sales
                      and marketing, while AFCOM Cargo will manage operational
                      activities, ensuring seamless cargo movement across key
                      trade lanes
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <Link
                    className="flex items-center px-3 py-1 hover:bg-gray-100 lg:text-base text-xs"
                    href="https://www.thehindubusinessline.com/economy/logistics/tt-group-afcom-cargo-to-introduce-chennai-colombo-male-chennai-route/article69209817.ece"
                    target="_blank"
                  >
                    Read More
                    <Image
                      src={ArrowRight}
                      alt="Read More"
                      className="w-4 h-4 ml-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex col-span-4 min-h-[250px] lg:min-h-full lg:col-span-2 row-span-1 justify-between bg-white gap-5 lg:flex-row flex-col">
              <div className="flex relative w-full min-h-[250px] lg:w-1/2 h-full bg-gray-100 p-4">
                <Image
                  className="flex w-full h-full object-contain"
                  src={
                    "https://media.licdn.com/dms/image/v2/D5622AQGxJXxoT8R6UQ/feedshare-shrink_800/B56ZSMxrLHH0Ag-/0/1737528620913?e=1747872000&v=beta&t=fgnfVyrdwq8IVytP9aHZubLiPaQ5PTlI_n8Re9J352o"
                  }
                  fill
                  alt="Afcom Holdings Ltd proudly operates a VT-registered Boeing 737-8F"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2 h-full justify-between p-4">
                <div className="flex flex-col">
                  <h6 className="text-gray-500 text-xs">LINKEDIN</h6>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7287723248736260096/"
                    className="mt-2"
                  >
                    <h2 className="lg:text-3xl text-lg line-clamp-3">
                      Afcom Holdings Ltd proudly operates a VT-registered Boeing
                      737-8F
                    </h2>
                  </Link>
                  <div className="hidden mt-3 lg:flex">
                    <p className="line-clamp-3 ">
                      with up to 20T payload and up to 5 hours of non stop
                      flying time, delivering seamless solutions for domestic
                      and international freighter demands.
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <Link
                    className="flex items-center px-3 py-1 hover:bg-gray-100 lg:text-base text-xs"
                    target="_blank"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7287723248736260096/"
                  >
                    Read More
                    <Image
                      src={ArrowRight}
                      alt="Read More"
                      className="w-4 h-4 ml-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
