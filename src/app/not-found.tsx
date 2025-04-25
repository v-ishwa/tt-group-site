import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full py-48 justify-center items-center container mx-auto max-w-7xl">
        <svg
          className="fill-black"
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="180"
          viewBox="0 0 256 256"
        >
          <path d="M224,68H32A12,12,0,0,0,20,80v72a12,12,0,0,0,12,12H60v36a4,4,0,0,0,8,0V164H188v36a4,4,0,0,0,8,0V164h28a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68Zm4,12v58.34L165.66,76H224A4,4,0,0,1,228,80ZM32,76H82.34l80,80H101.66L28,82.34V80A4,4,0,0,1,32,76Zm-4,76V93.66L90.34,156H32A4,4,0,0,1,28,152Zm196,4H173.66l-80-80h60.68L228,149.66V152A4,4,0,0,1,224,156Z"></path>
        </svg>
        <h4 className="text-3xl mt-5 text-brand">
          We&apos;re Working on Something Special
        </h4>
        <p className="text-center text-gray-500 max-w-1/2 mt-2">
          Thank you for your interest in TT Group. We&apos;re currently
          enhancing our digital presence to better showcase our comprehensive
          global services. While we complete this section, please explore our
          homepage to learn about our integrated solutions in air cargo,
          insurance, hospitality, and more.
        </p>
        <Link href="/">
          <Button className="mt-5">Back to home</Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
