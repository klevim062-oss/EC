import React from "react"
import Image from "next/image"
import { Reveal } from "./reveal"

export function SpecialistSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="container mx-auto px-4 relative z-10">
                <Reveal>
                    <div className="max-w-5xl mx-auto">
                        <div className="relative group p-px rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-[#00ff99]/20 transition-all duration-700">
                            {/* Glow Verde Leve */}
                            <div className="absolute inset-0 bg-[#00ff99]/5 blur-3xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative bg-[#0b0f12] rounded-[2rem] overflow-hidden p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center gap-10 md:gap-16">

                                {/* 1. Foto do Especialista */}
                                <div className="w-full md:w-auto flex justify-center order-1 md:order-1">
                                    <div className="relative w-64 h-64 md:w-80 md:h-80 group/photo">
                                        {/* Moldura com Iluminação Leve */}
                                        <div className="absolute -inset-2 bg-gradient-to-tr from-[#00ff99]/20 via-transparent to-[#00ff99]/10 rounded-[2.5rem] blur-sm opacity-50 photo-glow" />

                                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                                            <Image
                                                src="/rafael.jpg"
                                                alt="Rafael Venturi"
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover/photo:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Conteúdo de Texto */}
                                <div className="flex-1 text-center md:text-left order-2 md:order-2">
                                    <span className="inline-block text-[#00ff99] text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-80">
                                        Conheça quem criou a ECONYX™
                                    </span>

                                    <div className="relative inline-block mb-1">
                                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                            Rafael Venturi
                                        </h2>
                                        {/* Linha Verde Animada */}
                                        <div className="h-1 bg-[#00ff99] rounded-full w-0 group-hover:w-full transition-all duration-700 ease-out mt-2 shadow-[0_0_10px_rgba(0,255,153,0.5)]" />
                                    </div>

                                    <div className="mt-4 flex flex-col gap-1">
                                        <span className="text-white/90 font-bold text-xl">
                                            Especialista em Inteligência Financeira
                                        </span>
                                        <span className="text-white/40 font-medium text-sm tracking-wide">
                                            Criador da ECONYX | Estratégia Financeira
                                        </span>
                                    </div>

                                    <div className="mt-8 space-y-6 text-white/70 text-lg leading-relaxed font-medium max-w-xl">
                                        <p>
                                            Rafael já trabalhou em diferentes bancos e acompanhou de perto como as pessoas lidam com contas, cartões, parcelas e decisões financeiras no dia a dia.
                                        </p>
                                        <p>
                                            Com base nessa experiência e na lógica por trás desses sistemas, foi desenvolvida a ECONYX: uma solução criada para organizar gastos, identificar desperdícios e ajudar pessoas a tomarem decisões financeiras com mais clareza.
                                        </p>
                                    </div>

                                    {/* 5. Desfecho da Seção */}
                                    <div className="mt-10 pt-10 border-t border-white/5 relative">
                                        <div className="absolute top-0 left-0 md:left-0 right-0 md:right-auto w-24 h-px bg-gradient-to-r from-[#00ff99] to-transparent mx-auto md:mx-0" />
                                        <p className="text-white/50 text-base italic leading-relaxed">
                                            "Foi justamente observando essas dificuldades no dia a dia que surgiu a ideia de criar um sistema simples, direto e inteligente. <br className="hidden md:block" />
                                            Assim nasceu a ECONYX, uma forma prática de transformar dados financeiros em decisões mais claras e estratégicas."
                                        </p>
                                    </div>
                                </div>

                                {/* Brilho Suave passando no card (Shine Effect) */}
                                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                    <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] animate-shine" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <style jsx>{`
        @keyframes shine {
          100% {
            left: 200%;
          }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
        @keyframes photo-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .photo-glow {
          animation: photo-pulse 4s infinite ease-in-out;
        }
      `}</style>
        </section>
    )
}
