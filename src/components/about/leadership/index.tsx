"use client";
import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

// Image imports
import Poster from "./images/poster.png";
import TTK from "./images/TTK 1.png";
import TT_VASU from "./images/TT VASU 1.png";
import ARUN_VASU from "./images/ARUN VASU 1.png";

export default function Leadership() {
  const [centerIdx, setCenterIdx] = useState(1);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  const cards = [
    {
      img: TT_VASU,
      name: "TT Vasu",
      title: "CEO, TT Group",
      bio: `TT Vasu has led our organization through an era of digital transformation and global expansion, ensuring that our century‑old legacy continues to thrive in the modern age. His strategic vision and commitment to innovation have opened new markets and strengthened our core values.`,
    },
    {
      img: TTK,
      name: "TT Krishnamachari",
      title: "Founder, Economic Reformer & Nation Builder",
      bio: `The story of TT Group began nearly a century ago, when the streets of Chennai witnessed the spark of a dream that would illuminate Indian business for decades to come. TT Krishnamachari, a name synonymous with reform and resilience, founded TT Group in 1928. Under his leadership, the company introduced global brands such as Cadbury’s and MaxFactor to Indian households, and he personally helped shape India’s economic policies as Finance Minister. His pioneering spirit laid the foundations for modern commerce in India and continues to inspire everything we do.`,
    },
    {
      img: ARUN_VASU,
      name: "Arun Vasu",
      title: "COO, TT Group",
      bio: `Arun Vasy has been instrumental in optimizing our operations and driving efficiency across every division. His analytical approach and people‑first leadership have streamlined processes, boosted productivity, and deepened our commitment to sustainable growth and social responsibility.`,
    },
  ];

  useEffect(() => {
    cardRefs.forEach((ref, i) => {
      const el = ref.current;
      const xOffset = (i - centerIdx) * 192;
      const scale = i === centerIdx ? 1.1 : 1;
      const rotateY = i === centerIdx ? 0 : i < centerIdx ? 10 : -10;
      const rotateX = i === centerIdx ? 0 : 5;
      const borderColor = i === centerIdx ? "#A67B5B" : "transparent";
      const boxShadow = i === centerIdx ? "0 10px 20px rgba(0,0,0,0.15)" : "none";

      gsap.set(el, {
        left: "50%",
        xPercent: -50,
        zIndex: i === centerIdx ? 2 : 1,
      });
      gsap.to(el, {
        x: xOffset,
        scale,
        rotationY: rotateY,
        rotationX: rotateX,
        border: `2px solid ${borderColor}`,
        boxShadow,
        duration: 0.6,
        ease: "power2.inOut",
      });
    });
  }, [centerIdx]);

  return (
    <div className="bg-white py-20 px-4 md:px-20 relative">
      <p className="text-sm text-red-600 font-semibold uppercase mb-6 tracking-widest">
        Achievements
      </p>
      <h2 className="text-5xl font-semibold text-gray-900 mb-4">
        Meet the Minds that Move 
      </h2>
      <h2 className="text-5xl font-semibold text-gray-900 mb-12">
        Us Forward
      </h2>

      {/* Portraits with perspective */}
      <div className="relative mb-12 h-[200px] perspective-[1000px]">
        {cards.map((c, i) => (
          <div
            key={i}
            ref={cardRefs[i]}
            className="absolute top-0 w-48 h-48 rounded-sm"
            style={{
              transformStyle: "preserve-3d",
              border: "2px solid transparent",
            }}
          >
            <Image
              src={Poster}
              alt="Poster BG"
              fill
              className="object-cover rounded-sm"
            />
            <Image
              src={c.img}
              alt={c.name}
              width={112}
              height={112}
              className="absolute right-0 bottom-0 z-10 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setCenterIdx((c) => (c + 2) % 3)}
          className="w-9 h-9 bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={() => setCenterIdx((c) => (c + 1) % 3)}
          className="w-9 h-9 bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Text Content */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-bold text-gray-900">
          {cards[centerIdx].name}
        </h3>
        <p className="italic text-gray-600 mt-1 mb-4">
          {cards[centerIdx].title}
        </p>
        <p className="text-gray-700 leading-relaxed text-justify text-sm">
          {cards[centerIdx].bio}
        </p>
      </div>
    </div>
  );
}
