import React from "react";
import { BluePrint } from "../components/BluePrint";
import { Send } from "lucide-react";

const SendMail = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0E0E0E] px-6 py-24 sm:px-8 lg:px-16">

      <BluePrint />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center text-lg font-semibold tracking-[0.18em] text-primary">
            Get in Touch
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
            Let's discuss your project!
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
            Contact us today and learn more about how our interior fit out and
            custom manufacturing services can bring your ideas to life.
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            We Love To Hear From You
          </h3>
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">

            <div>
              <h3 className="text-2xl font-bold text-white">
                Get in Touch
              </h3>

              <p className="mt-2 text-sm text-white/70">
                Tell us about your villa. We'll be in touch within one working day.
              </p>
            </div>

            <div className="mt-6 space-y-4">

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-xl bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-primary"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-xl bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  className="rounded-xl bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-primary"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full rounded-xl bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendMail;