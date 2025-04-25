import { Logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/",
  },
  {
    label: "Our Companies",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Careers",
    href: "/",
  },
];

const Header = () => {
  return (
    <div className="flex w-full z-100 justify-center sticky top-0  bg-white/50 backdrop-blur-md">
      <div className="container max-w-7xl  mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <Image
            src={Logo.src}
            alt="TT Group | Promises kept"
            width={165}
            height={36}
          />
        </Link>

        <Menu items={menuItems} />
        <div className="hidden gap-x-6 lg:flex ">
          {menuItems.map((el) => (
            <Link
              key={el.label}
              className="px-3 font-medium hover:text-brand"
              href={el.href}
            >
              {el.label}
            </Link>
          ))}
        </div>
        <Link
          className="lg:flex hidden text-sm uppercase font-medium py-2 px-6 border hover:bg-black hover:text-white border-black transition-all duration-200"
          href="/get-quote"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
