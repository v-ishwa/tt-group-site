"use client";

import { Hamburger, Logo } from "@/assets/images";
import cn from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";

const Menu = ({ items }: { items: { label: string; href: string }[] }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex lg:hidden relative">
      <Image
        loading="lazy"
        src={Hamburger}
        alt="Menu"
        className="h-4 w-auto cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="flex flex-col gap-y-4 fixed top-0 left-0 overflow-hidden pointer-events-none  w-full h-screen">
        <div
          className={cn(
            "absolute top-0 right-0 translate-x-full z-100 pointer-events-auto flex flex-col p-10 w-full h-full bg-white transition-all duration-300 ease-in-out",
            {
              "translate-x-0": showMenu,
            }
          )}
        >
          <div className="flex w-full justify-between items-start">
            <Image
              src={Logo.src}
              alt="TT Group | Promises kept"
              width={165}
              height={36}
            />
            <svg
              onClick={() => {
                setShowMenu(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </div>
          <div className="flex flex-col mt-10 gap-y-3">
            {items.map((el) => (
              <Link
                className="text-lg font-medium"
                key={el.label}
                href={el.href}
              >
                {el.label}
              </Link>
            ))}
            <Button className="mt-10">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
