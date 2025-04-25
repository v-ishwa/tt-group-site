"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import gsap from "gsap";

import img1 from "./images/image1.png";
// Add more images if needed

export default function HistoryDetails() {
  const points = [
    {
      year: "1928",
      img: img1,
      description: (
        <>
          <p>
            Founded in 1928 by the visionary T.T. Krishnamachari, TT Group is a legacy of innovation, leadership, and transformative impact that has shaped India’s business and social landscape for nearly a century.
          </p>
          <p>
            From its humble beginnings as an indenting agency in Chennai, TT Group played a pioneering role in introducing global brands like Cadbury’s, Kiwi, and MaxFactor to Indian households. Under the leadership of its founder—who went on to become a key architect of India’s Constitution and held vital cabinet portfolios—the Group laid the foundation for modern distribution and commerce in the country.
          </p>
        </>
      ),
    },
    {
      year: "1943",
      img: img1,
      description:
        "In 1943, TT Group introduced key global brands like Cadbury's, Kiwi, and MaxFactor to India, marking a significant milestone.",
    },
    {
      year: "1952",
      img: img1,
      description:
        "The year 1952 marked another transformation, with TT Group taking bold steps toward global expansion and innovation.",
    },
    {
      year: "1970",
      img: img1,
      description:
        "In 1970, TT Group expanded its presence in manufacturing, becoming a leader in multiple industries.",
    },
    {
      year: "1984",
      img: img1,
      description:
        "Since 1984, the group has championed technology-driven change, contributing to India's economic growth.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImageRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const timelineLineRef = useRef(null);

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

  // Animate on index change
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      currentImageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    // Side images fade/scale
    if (leftImageRef.current) {
      gsap.fromTo(
        leftImageRef.current,
        { scale: 0.9, opacity: 0.2 },
        { scale: 1, opacity: 0.4, duration: 0.5, ease: "power2.out" }
      );
    }

    if (rightImageRef.current) {
      gsap.fromTo(
        rightImageRef.current,
        { scale: 0.9, opacity: 0.2 },
        { scale: 1, opacity: 0.4, duration: 0.5, ease: "power2.out" }
      );
    }

    // Animate the timeline line color and width
    if (timelineLineRef.current) {
      gsap.to(timelineLineRef.current, {
        width: `${(currentIndex / (points.length - 1)) * 100}%`,
        backgroundColor: "#f56565", // Red color for active timeline
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, [currentIndex]);

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <p className="text-sm text-red-600 font-semibold uppercase mb-6 tracking-widest">
        Achievements
      </p>
      <h2 className="text-5xl font-semibold text-gray-900 mb-4">
        Democratising talent attraction
      </h2>
      <h2 className="text-5xl font-semibold text-gray-900 mb-16">since 1984</h2>

      <div className="max-w-6xl mx-auto mb-12 relative">
        <div className="flex justify-center items-center relative h-[350px] gap-4 overflow-hidden">
          {currentIndex > 0 && (
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-red-600 p-1 hover:bg-red-700 transition"
            >
              <ArrowLeft className="text-white w-5 h-5" />
            </button>
          )}

          {currentIndex > 0 && (
            <div
              className="w-[13%] h-full opacity-40"
              ref={leftImageRef}
            >
              <Image
                src={points[currentIndex - 1].img}
                alt="Previous"
                className="w-full h-full object-cover rounded-md"
                width={300}
                height={300}
              />
            </div>
          )}

          <div
            className="w-[45%] h-full relative z-10 shadow-lg"
            ref={currentImageRef}
          >
            <Image
              src={img}
              alt={`Current ${points[currentIndex].year}`}
              className="w-full h-full object-cover rounded-md"
              width={400}
              height={300}
            />
          </div>

          {currentIndex < points.length - 1 && (
            <div
              className="w-[13%] h-full opacity-40"
              ref={rightImageRef}
            >
              <Image
                src={points[currentIndex + 1].img}
                alt="Next"
                className="w-full h-full object-cover rounded-md"
                width={300}
                height={300}
              />
            </div>
          )}

          {currentIndex < points.length - 1 && (
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-red-600 p-1 hover:bg-red-700 transition"
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
          <div
            ref={timelineLineRef}
            className="absolute inset-0 top-1/2 h-[2px] bg-gray-300"
          ></div>
          {points.map((_, idx) => (
            <div
              key={idx}
              className={`absolute w-3 h-3 rounded-full transform -translate-y-1/2 top-1/2 ${idx === currentIndex ? "bg-red-600" : "bg-gray-300"}`}
              style={{
                left: `calc(${(idx / (points.length - 1)) * 100}% - 0.375rem)`,
              }}
            ></div>
          ))}
        </div>

        <div className="text-gray-700 text-base leading-relaxed space-y-4">
          {description}
        </div>
      </div>
    </section>
  );
}
