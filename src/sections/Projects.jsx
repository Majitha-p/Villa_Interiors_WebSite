import React from "react";
import { ArrowRight } from "lucide-react";

import img1 from "../assets/projectImages/image1.png";
import img2 from "../assets/projectImages/image2.png";
import img3 from "../assets/projectImages/image3.png";
import img4 from "../assets/projectImages/image4.png";
import img5 from "../assets/projectImages/image5.png";
import img6 from "../assets/projectImages/image6.png";
import img7 from "../assets/projectImages/image7.png";

const Projects = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="relative isolate overflow-hidden bg-[#0E0E0E] px-6 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <span className="inline-flex items-center text-lg font-semibold tracking-[0.18em] text-primary">
            Our Work
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl text-white">
            Designed. Built. Delivered
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
            <img
              src={images[0]}
              alt="project-1"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {images.slice(1).map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`project-${idx + 2}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}

        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-hover"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;