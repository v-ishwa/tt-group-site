"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

const data = [
  {
    value: "50+",
    label: "Years of Legacy",
    description: "A strong foundation built on decades of trust and excellence.",
  },
  {
    value: "10+",
    label: "Business Verticals",
    description: "Diversified expertise across key industries.",
  },
  {
    value: "5000+",
    label: "Employees",
    description: "A growing team of skilled and passionate professionals.",
  },
  {
    value: "100+",
    label: "Countries Served",
    description: "A truly global presence, reaching customers worldwide.",
  },
  {
    value: "2M+",
    label: "Products Delivered Annually",
    description: "Trusted by millions, year after year.",
  },
  {
    value: "15+",
    label: "Awards & Recognitions",
    description: "Acknowledged for excellence in leadership and innovation.",
  },
];

const Performance = () => {
  return (
    <div className="bg-white py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto ">
        <p className="text-sm text-red-600 font-semibold uppercase mb-6 tracking-widest">Achievements</p>
        <h2 className="text-5xl font-semibold text-gray-900 mb-4">
          Performance built on legacy
        </h2>
        <h2 className="text-5xl font-semibold text-gray-900 mb-12">
        and vision
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-md px-6 py-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                    <ArrowUp size={16} strokeWidth={2.5} className="text-green-600" />
                    <span className="text-2xl font-bold text-gray-800 self-end">{item.value}</span>
                </div>
                <span className="text-lg text-gray-800 font-medium">{item.label}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
