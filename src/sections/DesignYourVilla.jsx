import React from "react";
import Slider from "../assets/slider.jpg";
import { Box, Check, Pencil, PencilRuler, ArrowRight } from "lucide-react";

const DesignYourVilla = () => {
  const points = [
    "No guessing",
    "No Expensive Redesigns",
    "No Delays",
  ];

  const designWorkflow = [
    {
      icon: Box,
      text: "Upload floor plan",
    },
    {
      icon: PencilRuler,
      text: "Get 3D Design",
    },
    {
      icon: Pencil,
      text: "Live Design Edit",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] shadow-soft">

        {/* Background Image */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={Slider}
          alt="slider"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#0e0e0e]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/50 via-[#0e0e0e]/52 to-[#0e0e0e]/48" />

        {/* Content */}
        <div className="relative grid gap-12 px-8 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_1.35fr] lg:items-center lg:px-14 lg:py-16">

          <div style={{ opacity: 1, transform: "none" }}>

            <h2 className="text-4xl font-bold leading-tight text-white">
              Design Your Villa Interiors <br />
              <span className="text-primary">
                Before Spending a Dirham
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-9 text-white/80">
              Upload your villa floor plan and collaborate live with our designers
              to create a full 3D interior concept within an hour.
            </p>

            <ul className="mt-7 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-4 text-lg text-white sm:grid-cols-2">

              {points.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                    <Check className="h-3.5 w-3.5" />
                  </span>

                  {item}
                </li>
              ))}

            </ul>
            <div className="mt-8">
              <a className="inline-flex items-center gap-4 rounded-2xl bg-primary px-6 py-4 text-lg font-medium text-white transition hover:bg-primary-hover"
                href="#">
                Start Your 3D Interior Design <ArrowRight w-5 h-5 />
              </a>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">

            {designWorkflow.map((item, idx) => (
              <div
                key={idx}
                className="flex min-h-65 h-full flex-col items-center justify-center rounded-[1.75rem] border border-primary bg-black/18 px-6 py-8 text-center backdrop-blur-md"
              >
                {/* Icon */}
                <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                  <item.icon className="h-9 w-9" />
                </span>

                {/* Text */}
                <p className="text-xl font-medium leading-tight text-white">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default DesignYourVilla;