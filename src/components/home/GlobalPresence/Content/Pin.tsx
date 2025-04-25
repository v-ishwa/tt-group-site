import Image, { StaticImageData } from "next/image";
import React from "react";

const Pin = ({
  el,
  isIndia,
}: {
  el: {
    name: string;
    image: StaticImageData;
    top: string;
    left: string;
    content: {
      title: string;
      value: string;
      subTitle: string;
    };
  };
  isIndia?: boolean;
}) => {
  return (
    <div
      data-status="closed"
      className="pin data-[status=closed]:cursor-pointer data-[status=closed]:z-10 data-[status=open]:z-20 -rotate-45 -translate-x-1/2 -translate-y-1/2"
      style={{
        top: el.top,
        left: el.left,
      }}
    >
      <div className="absolute close_btn opacity-0 hidden cursor-pointer top-1 right-1 font-semibold p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
        </svg>
      </div>
      <div className="flex justify-center items-center flex-col w-full h-full">
        <div className="flex items-center">
          {isIndia ? (
            <div className="pin_flag flex w-3.5 h-3.5 rounded-full bg-brand"></div>
          ) : (
            <Image
              src={el.image}
              alt={el.name}
              width={290}
              height={174}
              className="pin_flag object-cover w-5.5 h-5.5 rounded-full rotate-45"
            />
          )}

          <span className="pin_flag_text opacity-0 text-sm text-gray-500 font-medium hidden ml-2">
            {el.name}
          </span>
        </div>
        <div className="flex-col pin_flag_content opacity-0 items-center mt-4 hidden">
          <span className="text-xs font-medium font-heading text-gray-400">
            {el.content.title}
          </span>
          <span className="text-xl font-semibold">{el.content.value}</span>
          <span className="text-xs font-heading font-medium text-gray-400">
            {el.content.subTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pin;
