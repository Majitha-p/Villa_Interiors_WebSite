import React from "react";
import maskBg from "../assets/mask-bg.png";
import textImg from "../assets/text-fg.jpg";

import SolutionsMask from "../components/SolutionsMask";
import { useScrollProgress } from "../hooks/useScrollProgress";

const Service = () => {
  const progress = useScrollProgress("solutions");

  const isMobile = window.innerWidth < 768;

  const scale = isMobile ? 0.5 + progress * 2.5 : 0.4 + progress * 5;

  const textOpacity =
    progress < 0.65 ? 1 : Math.max(1 - (progress - 0.65) / 0.15, 0);

  const imageOpacity =
    progress > 0.55 ? Math.min((progress - 0.55) / 0.15, 1) : 0;

  const blur = progress > 0.8 ? (progress - 0.8) * 40 : 0;

  return (
    <section id="solutions" className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${maskBg})` }}
        />

        <div className="absolute inset-0 bg-black/20" />

        {/* SVG MASK COMPONENT */}
        <SolutionsMask maskBg={maskBg} scale={scale} opacity={textOpacity} />

        {/* Image reveal */}
        <div
          className="absolute inset-0 z-20"
          style={{
            opacity: imageOpacity,
            filter: `blur(${blur}px)`,
          }}
        >
          <img src={textImg} className="w-full h-full object-cover" />
        </div>

        {/* Final content */}
        <div
          className="absolute inset-0 z-30 flex items-center justify-center text-center text-white"
          style={{
            opacity: progress > 0.85 ? 1 : 0,
          }}
        >
          <div>
            <img src="/idealFactory.png" className="h-[60px] mx-auto mb-6" />
            <h2 className="text-4xl font-bold">Our Solutions</h2>
            <p className="mt-4 text-lg">
              We provide all types of integrated services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
