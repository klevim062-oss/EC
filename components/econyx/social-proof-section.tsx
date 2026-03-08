"use client"

import React from "react"
import { Reveal } from "./reveal"

interface TestimonialCardProps {
    name: string
    image: string
}

function TestimonialCard({ name, image }: TestimonialCardProps) {
    return (
        <div className="flex-shrink-0 px-3 md:px-4">
            <div className="w-[190px] md:w-[240px] rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-zinc-900/40 group relative">
                <img
                    src={image}
                    alt={`Depoimento de ${name}`}
                    className="w-full h-auto object-contain block"
                    style={{ maxHeight: "none" }}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
        </div>
    )
}

export function SocialProofSection() {
    const testimonials = [
        { name: "Rafael", image: "/testimonials/t1.png" },
        { name: "Letícia S.", image: "/testimonials/t2.png" },
        { name: "Ricardo", image: "/testimonials/t3.png" },
        { name: "Bruno", image: "/testimonials/t4.png" },
    ]

    // Quadruplicar para o efeito infinite marquee sem cortes visíveis
    const displayTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

    return (
        <section className="py-[clamp(60px,8vw,100px)] relative overflow-hidden">
            {/* Background Sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/[0.03] blur-[150px] pointer-events-none rounded-full" />

            <style jsx global>{`
                @keyframes marquee-infinite {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-50%, 0, 0); }
                }
                .marquee-container {
                    display: flex;
                    width: max-content;
                    animation: marquee-infinite 45s linear infinite;
                    will-change: transform;
                }
                .marquee-wrapper:hover .marquee-container {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="relative">
                <div className="text-center mb-10 px-5">
                    <Reveal>
                        <h2 className="text-[clamp(24px,3vw,36px)] leading-tight font-black tracking-tight text-white/90 text-balance">
                            Resultados reais de quem já usa a ECONYX
                        </h2>
                    </Reveal>
                </div>

                {/* Container do Carousel (Marquee) */}
                <div className="relative w-full overflow-hidden py-10 marquee-wrapper">
                    <div className="marquee-container">
                        {displayTestimonials.map((t, i) => (
                            <TestimonialCard
                                key={`${t.name}-${i}`}
                                name={t.name}
                                image={t.image}
                            />
                        ))}
                    </div>

                    {/* Gradient Masks para suavizar as bordas - otimizadas */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#030708] to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#030708] to-transparent z-10" />
                </div>
            </div>
        </section>
    )
}
