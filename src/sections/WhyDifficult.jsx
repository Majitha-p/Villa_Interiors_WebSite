import React from 'react'
import { CircleAlert, Clock, Factory, Layers, PencilRuler, Shield, Wallet, Wrench } from 'lucide-react'
import DesignSectionBG from "../assets/designSectionBG.png"

const WhyDifficult = () => {
    const highlights1 = [
        {
            icon: Shield,
            title: "Quality Problems",
        },
        {
            icon: Clock,
            title: "Delays during execution",
        },
        {
            icon: Wallet,
            title: "Poor value for money",
        },
        {
            icon: CircleAlert,
            title: "Weak after-sales support",
        },
    ]
    const highlights2 = [
        {
            icon: Layers,
            title: "Multiple Interior Systems",
            description: "One Factory. Kitchens, wardrobes, doors, and premium window systems manufactured together in one facility for coordinated villa interiors."
        },
        {
            icon: PencilRuler,
            title: "Coordinated Design",
            description: "Our designers ensure that kitchens, closets, doors, and window systems complement each other in style and proportion."
        },
        {
            icon: Wrench,
            title: "After-Sales Support & Maintenance",
            description: "Our team installs every product with precision to ensure the final result reflects the original design."
        },
        {
            icon: Factory,
            title: "Precision Manufacturing & Installation",
            description: "Manufactured in-house. Installed with precision. One accountable team."
        }
    ]
    return (
        <div>
            <section className="bg-white px-6 py-20 sm:px-8 lg:px-16 lg:py-28">
                <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#231f20] px-6 py-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                    <div className='max-w-4xl'>
                        <h2 className='text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]'>
                            Why Villa Interior Projects Often Become Difficult?
                        </h2>
                        <p className="mt-4 max-w-4xl text-sm leading-7 text-white/80 sm:text-base">
                            When interior systems are sourced from multiple suppliers, the process becomes fragmented, making it
                            difficult to coordinate a consistent final result.
                            The lack of commitment leads to:
                        </p>


                    </div>
                    <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                        {highlights1.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 text-lg font-semibold text-white"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/45 text-white/80">
                                    <item.icon className="w-3.5 h-3.5" />
                                </span>

                                <h3 className="text-lg font-semibold leading-none">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 h-72 sm:h-80 lg:h-96 overflow-hidden rounded-xl border border-white/10">
                        <img
                            src={DesignSectionBG}
                            alt="Design Background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-0">

                        <div className="lg:pe-10">
                            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                                The Ideal Factory <br /> Approach
                            </h2>
                        </div>

                        <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">

                            {highlights2.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="py-6 px-6 rounded-2xl glass"
                                >
                                    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center text-primary">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </span>

                                    <h3 className="text-lg font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                                        {item.description}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>


                </div>

            </section>


        </div>
    )
}

export default WhyDifficult