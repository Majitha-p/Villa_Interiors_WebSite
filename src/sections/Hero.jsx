import React from 'react'
import hero from '../assets/hero-bg.png'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="w-full h-screen relative z-0">

      {/* Background */}
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

        <h1 className="text-white text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.05]">
          Design & Delivery of
          <br />
          <span className="text-primary">
            Your Villa Interiors Made Simple
          </span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white">
          Kitchens, closets, doors, and premium uPVC windows designed, manufactured, and installed by one trusted Emirati factory.
        </p>
        <a className="mt-7 inline-flex justify-center items-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-[#0E0E0E] shadow-2xl transition hover:bg-primary hover:text-white">
          Get Your Free 3D Design Now  <ArrowRight className='w-4 h-4' />
        </a>



      </div>

    </section>
  )
}

export default Hero