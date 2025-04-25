import { TTLogo } from "@/assets/images";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import cn from "@/utils";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "bg-black text-white uppercase flex group overflow-hidden items-center justify-center px-9 py-3 w-max h-max text-sm font-semibold",
        className
      )}
    >
      {children}
      <div className="relative ml-4 w-5 h-5">
        <Image
          className="absolute top-0 left-0 -translate-x-16 translate-y-16 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
          src={TTLogo}
          alt="TT Logo"
          width={20}
          height={20}
        />
        <Image
          className="absolute top-0 left-0 group-hover:translate-x-16 group-hover:-translate-y-16 group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
          src={TTLogo}
          alt="TT Logo"
          width={20}
          height={20}
        />
      </div>
    </Link>
  );
};

export default Button;
