"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Play } from "lucide-react";

export function EconyxScrollSection() {
    return (
        <section className="relative w-full pt-16 md:pt-32 pb-20">
            {/* ContainerScroll já cria o efeito 3D no scroll */}
            <ContainerScroll
                titleComponent={
                    <div className="mx-auto max-w-[920px] text-left">
                        <section className="econyx-highlight p-7 md:p-10">
                            <h3 className="m-0 mb-3 text-[clamp(20px,3vw,30px)] font-black tracking-tight text-[#00ff99] drop-shadow-[0_0_14px_rgba(0,255,170,0.35)]">


                                Foi aí que a ECONYX entrou.
                            </h3>

                            <div className="space-y-3 text-base leading-relaxed text-[rgba(230,230,230,0.92)]">
                                <p>A plataforma que organizou minha vida financeira em um só lugar direto no meu celular, onde eu estiver.</p>

                                <p>Ela controla meu mês, meus cartões e ainda encontra descontos em supermercado, farmácia e onde mais eu estiver gastando.</p>

                                <p>Você deixa de decidir no escuro. E passa a enxergar impacto, consequência e oportunidade antes de agir.</p>

                                <strong className="inline-block mt-1.5 font-black text-[#00ff99] drop-shadow-[0_0_12px_rgba(0,255,170,0.35)]">
                                    É sobre economizar antes de pagar.
                                </strong>
                            </div>
                        </section>
                    </div>
                }
            >
                {/* Card do efeito: Ajustado para preenchimento total edge-to-edge */}
                <div className="relative h-full w-full overflow-hidden bg-[#050505]">
                    {/* Background visual replaced with a clean, themed placeholder since duplicate videos are prohibited */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#004d33]/20 to-black flex items-center justify-center">
                        <div className="w-[120px] h-[120px] rounded-full bg-[#00ff99]/5 blur-3xl animate-pulse" />
                    </div>

                    {/* Subtle Overlay to match UI */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-[1]" />

                    <div className="absolute bottom-5 left-5 z-[2] rounded-full border border-[#00ff99]/20 bg-black/60 px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#00ff99] backdrop-blur-md shadow-[0_0_15px_rgba(0,255,153,0.15)] uppercase">

                    </div>
                </div>
            </ContainerScroll>
        </section>
    );
}
