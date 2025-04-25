"use client";
import React from "react";
import Image from "next/image";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";

const History = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 md:px-20 bg-white ">
            <div className="flex flex-col md:flex-row gap-10 w-full max-w-7xl pb-20 border-b-2 border-gray-100">
                {/* Left Section */}
                <div className="flex-1 flex flex-col gap-24">
                    {/* Top Images */}
                    <div className="flex gap-4 flex-wrap">
                        <Image src={image1} alt="Image 1" className=" filter grayscale flex-none w-[187px] h-[187px]" />
                        <Image src={image2} alt="Image 2" className=" filter grayscale" />
                    </div>

                    {/* Text Section */}
                    <div className="">
                        <h2 className="text-3xl font-semibold text-gray-900">
                            A legacy of leadership <br /> and a future of <span className="text-red-600">growth</span>
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed text-justify">
                            Founded on timeless values and fueled by relentless ambition, TT Group is a story of innovation,
                            leadership, and transformation. Our influence has shaped many business and social landscapes
                            for nearly a century.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed text-justify">
                            From its humble beginnings as an indenting agency in Chennai, TT Group played a pioneering role in introducing global brands like Cadbury’s, Kiwi, and MaxFactor to Indian households. Under the leadership of its founder—who went on to become a key architect of India’s Constitution and held vital cabinet portfolios—the Group laid the foundation for modern distribution and commerce in the country.
                        </p>
                    </div>

                </div>

                {/* Right Section */}
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex gap-4 items-start">
                        <Image src={image3} alt="Image 3" className=" filter grayscale" />
                        <Image src={image4} alt="Image 4" className=" filter grayscale" />
                    </div>
                    <div className="flex gap-4 items-start">
                        <Image src={image5} alt="Image 5" className=" filter grayscale" />
                        <Image src={image6} alt="Image 6" className=" filter grayscale" />
                    </div>
                    <div className="flex gap-4 items-start">
                        <Image src={image7} alt="Image 7" className=" filter grayscale" />
                        <Image src={image8} alt="Image 8" className=" filter grayscale" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
