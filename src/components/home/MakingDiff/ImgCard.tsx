import Image from "next/image";
import React from "react";

const ImgCard = ({ src }: { src: string }) => {
  return (
    <div className="w-full h-40 relative rounded-xl overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0 hidden lg:flex overflow-hidden">
        <div className="flex w-1/2 h-full mdc_left absolute left-0 top-0 backdrop-blur-lg bg-white/80"></div>
        <div className="flex w-1/2 h-full mdc_right absolute right-0 bottom-0 backdrop-blur-lg bg-white/80"></div>
      </div>
      <Image
        loading="lazy"
        src={src}
        alt="img"
        style={{
          aspectRatio: "43 / 53",
        }}
        width={129}
        height={159}
        className="w-full h-auto  object-cover"
      />
    </div>
  );
};

export default ImgCard;
