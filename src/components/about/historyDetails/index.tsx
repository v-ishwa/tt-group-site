"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

import img1 from "./images/image1.png";
import img2 from "./images/image2.png";
// import img3 from "./images/image3.png"; // Add more images here

export default function HistoryDetails() {
  const points = [
    {
      year: "1928",
      img: img1,
      description:
        "Founded in 1928 by the visionary T.T. Krishnamachari, TT Group has played a major role in shaping India's business landscape.",
    },
    {
      year: "1943",
      img: img2,
      description:
        "In 1943, TT Group introduced key global brands like Cadbury's, Kiwi, and MaxFactor to India, marking a significant milestone.",
    },
    // {
    //   year: "1952",
    //   img: img3,
    //   description:
    //     "The year 1952 marked another transformation, with TT Group taking bold steps toward global expansion and innovation.",
    // },
    // Add more if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < points.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const { img, description } = points[currentIndex];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <p className="text-sm text-red-600 font-semibold uppercase mb-6 tracking-widest">
        Achievements
      </p>
      <h2 className="text-5xl font-semibold text-gray-900 mb-4">
        Democratising talent attraction
      </h2>
      <h2 className="text-5xl font-semibold text-gray-900 mb-16">since 1984</h2>

      <div className="max-w-4xl mx-auto mb-12 relative">
        {/* Image Display with Arrows */}
        <div className="flex justify-center items-center relative">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-600 p-2 hover:bg-red-700 transition"
            >
              <ArrowLeft className="text-white w-5 h-5" />
            </button>
          )}

          {/* Image */}
          <Image
            src={img}
            alt={`History ${points[currentIndex].year}`}
            width={img.width}
            height={img.height}
            className="object-contain"
          />

          {/* Right Arrow */}
          {currentIndex < points.length - 1 && (
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-600 p-2 hover:bg-red-700 transition"
            >
              <ArrowRight className="text-white w-5 h-5" />
            </button>
          )}
        </div>

        {/* Timeline Labels */}
        <div className="mt-10 mb-2 flex justify-between text-sm text-gray-700 font-medium">
          {points.map((point, idx) => (
            <div key={idx}>{point.year}</div>
          ))}
        </div>

        {/* Timeline Line & Dots */}
        <div className="relative h-2 mb-10">
          <div className="absolute inset-0 top-1/2 h-[2px] bg-gray-300"></div>
          {points.map((_, idx) => (
            <div
              key={idx}
              className={`absolute w-3 h-3 rounded-full transform -translate-y-1/2 top-1/2 ${
                idx === currentIndex ? "bg-red-600" : "bg-gray-300"
              }`}
              style={{
                left: `calc(${(idx / (points.length - 1)) * 100}% - 0.375rem)`,
              }}
            ></div>
          ))}
        </div>

        {/* Description */}
        <div className="text-gray-700 text-base leading-relaxed space-y-4">
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
