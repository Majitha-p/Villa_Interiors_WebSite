import React from 'react'
import Image from '../assets/transforming.png'
import { Check, Phone } from 'lucide-react';
const Contact = () => {
    const points = [
        "One factory for kitchens, wardrobes, doors, and premium window systems.",
        "Fast 3D design before production",
        "Precision manufacturing with European machinery",
        "Solutions designed for UAE villas",
    ];
    return (
        <section id='contact' className="bg-white px-6 py-16 sm:px-8 lg:px-16">
            <div className='mx-auto max-w-5xl'>
                <div className="from-l-b relative isolate overflow-hidden rounded-3xl bg-linear-to-br bg-primary p-8 shadow-2xl shadow-primary-25 sm:p-12 lg:p-14">
                    <div className='relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]'>
                        <div className='mx-auto w-full max-w-120 lg:max-w-none'>
                            <div className='relative aspect-4/3 w-full'>
                                <img className='object-contain object-center drop-shadow-2xl'
                                    src={Image} alt="" />
                            </div>
                        </div>
                        <div className='text-white'>
                            <h2 className='text-3xl font-bold leading-tight sm:text-4xl'>
                                Why Villa Owners Choose Ideal Factory
                            </h2>
                            <ul className="mt-7 space-y-3.5">

                                {points.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">

                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/25 ring-1 ring-white/40">
                                            <Check className="h-3.5 w-3.5" />
                                        </span>

                                        {item}
                                    </li>
                                ))}

                            </ul>
                            <a className='mt-8 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-6 py-3 text-sm font-semibold text-primary backdrop-blur transition hover:bg-white hover:text-primary-hover'
                                href="#"><Phone className='h-4 w-4 ' />Start Your Free 3D Design</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact