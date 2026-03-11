"use client";

import React, { useEffect } from "react";
import { Reveal } from "./reveal";

export function EconyxScrollSection() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="relative w-full py-6">
            <div className="mx-auto max-w-[800px] px-[18px]">
                <div className="text-left md:text-center">
                    <h3 className="m-0 mb-4 text-[clamp(20px,3vw,28px)] font-black tracking-tight text-[#00ff99] drop-shadow-[0_0_14px_rgba(0,255,170,0.35)]">
                        Foi aí que a ECONYX entrou.
                    </h3>

                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-[rgba(230,230,230,0.92)] font-medium">
                        <p>A plataforma que organizou minha vida financeira em um só lugar direto no meu celular, onde eu estiver.</p>

                        <p>Ela controla meu mês, meus cartões e ainda encontra descontos em supermercado, farmácia e onde mais eu estiver gastando.</p>

                        <p>Você deixa de decidir no escuro. E passa a enxergar impacto, consequência e oportunidade antes de agir.</p>

                        <strong className="inline-block mt-2 font-black text-[#00ff99] drop-shadow-[0_0_12px_rgba(0,255,170,0.35)]">
                            É sobre economizar antes de pagar.
                        </strong>
                    </div>

                    {/* Vídeo do Vimeo Integrado */}
                    <div className="mt-12 flex justify-center">
                        <div className="w-full max-w-[340px] md:max-w-[400px] relative">
                            {/* Efeito Glow Verde Integrado */}
                            <div className="absolute -inset-1.5 bg-[#00ff99]/15 blur-2xl rounded-[2.5rem] pointer-events-none transition-opacity duration-700" />

                            <div className="relative overflow-hidden rounded-[2.2rem] border-2 border-white/10 shadow-[0_0_30px_rgba(0,255,153,0.15)] bg-black transition-transform duration-500 hover:scale-[1.01]">
                                <div style={{ padding: '175.56% 0 0 0', position: 'relative' }}>
                                    <iframe
                                        src="https://player.vimeo.com/video/1172368948?badge=0&autopause=0&player_id=0&app_id=58479"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="econyx"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
