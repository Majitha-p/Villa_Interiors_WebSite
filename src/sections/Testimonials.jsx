import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const Testimonials = () => {
  const feedback = [
    {
      message:
        "Working with Ideal Factory was the best decision for our villa. Every kitchen, closet and door felt like part of one coordinated whole.",
      name: "Khalid Al Mansoori",
    },
    {
      message:
        "Having one factory handle everything saved months of coordination and the finish quality is genuinely premium.",
      name: "Aisha Al Nuaimi",
    },
    {
      message:
        "The uPVC windows and matching interior doors transformed how the villa feels. Quiet, well sealed, beautifully aligned.",
      name: "Fatima Al Hammadi",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % feedback.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? feedback.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="bg-[#1e1e1e] px-6 py-20 text-white sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[5fr_7fr]">

          {/* Left Side */}
          <div>
            <span className="inline-flex items-center text-lg font-semibold tracking-[0.18em] text-primary">
              Testimonials
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              What They're Talking About Company?
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              Real villa owners across the UAE have trusted Ideal Factory for
              kitchens, closets, doors and uPVC window systems.
            </p>

            <div className="mt-7 flex gap-3">
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:opacity-90"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="overflow-hidden">
            <div className="-me-4 flex p-4">
              <div className="shrink-0 basis-full px-2 sm:basis-1/2">
                <article className="relative flex h-full flex-col rounded-2xl p-7 shadow-[0px_0px_12px_rgba(0,0,0,0.1)]  shadow-white/20">

                  <Quote className="h-10 w-10 text-primary" />

                  <p className="mt-5 flex-1 text-base leading-relaxed text-white/80 sm:text-lg">
                    {feedback[current].message}
                  </p>

                  <div className="mt-6">
                    <p className="text-lg font-semibold text-primary">
                      {feedback[current].name}
                    </p>

                    <p className="text-xs uppercase tracking-wider text-white/55">
                      Customer
                    </p>
                  </div>
                </article>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;