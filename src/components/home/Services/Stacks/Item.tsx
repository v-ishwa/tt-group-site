import cn from "@/utils";
import React, { useState } from "react";

const Item = ({
  primaryColor,
  title,
  content,
  bgUrl,
}: {
  primaryColor: string;
  title: string;
  content: {
    title: string;
    description: string;
  }[];
  bgUrl: string;
}) => {
  const [openId, setOpenId] = useState<number>(0);

  return (
    <div className="stack_item">
      <div
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
        className="flex w-full h-max lg:h-[60vh] min-h-[540px] relative content  p-5 lg:p-10 bg-cover bg-center"
      >
        <div className="flex z-20 w-full lg:flex-row flex-col lg:justify-between">
          <h2 className="lg:text-4xl text-2xl h-max font-semibold max-w-full lg:max-w-1/2 title leading-tight text-white">
            {title}
          </h2>
          <div className="flex flex-col w-full lg:mt-0 mt-10 lg:w-1/3">
            {content?.map((el, i) => (
              <div
                onMouseEnter={() => {
                  if (openId !== i) setOpenId(i);
                }}
                key={i}
                style={{
                  backgroundColor: `rgba(${primaryColor}, ${
                    openId === i ? 1 : 0.6
                  })`,
                }}
                className={cn("flex w-full p-5 flex-col text-white", {
                  "cursor-pointer": openId !== i,
                  "border-t border-gray-400": i !== 0,
                })}
              >
                <span className="text-lg lg:text-xl font-medium lg:font-semibold">
                  {el.title}
                </span>
                <p
                  className={cn(
                    "text-sm line-clamp-3 h-[60px] transition-all duration-500",
                    {
                      "h-0": openId !== i,
                      "mt-3": openId === i,
                    }
                  )}
                >
                  {el.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
