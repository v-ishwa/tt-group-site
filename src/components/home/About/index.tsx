import React from "react";
import Images from "./Images";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col items-center py-20 lg:py-30">
      <h6 className="text-xs lg:text-sm text-brand font-semibold tracking-widest">
        ABOUT US
      </h6>
      <h2 className="text-3xl lg:text-5xl font-semibold mt-4 leading-tight text-center">
        Our legacy of excellence
      </h2>
      <p className="text-gray-700 text-center mt-4 max-w-4xl leading-relaxed">
        Founded in 1984 by TT Vasu, a scion of the TTK family and youngest son
        of former Union Finance Minister, TT Krishnamachari, the group today has
        eight companies within its purview, employing around 400 people around
        India. Under the leadership of Chairman and MD Arun Vasu, the TT Group
        has been a beacon of growth, not only creating value for shareholders
        but also for the wider community, particularly through philanthropic,
        community-driven efforts.
      </p>
      <Images />
    </div>
  );
};

export default About;
