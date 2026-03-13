"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

declare global {
    interface Window {
        Vimeo: any;
    }
}

export function EconyxScrollSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const iframe = containerRef.current?.querySelector('iframe');
            if (iframe && window.Vimeo) {
                const player = new window.Vimeo.Player(iframe);
                playerRef.current = player;

                player.on('play', () => setIsPlaying(true));
                player.on('pause', () => setIsPlaying(false));

                player.ready().then(() => {
                    setIsReady(true);
                    // Single attempt to play muted (browser policy compliant)
                    player.play().then(() => {
                        setIsPlaying(true);
                    }).catch(() => {
                        setIsPlaying(false);
                    });
                });
            }
        };

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const handleInteraction = () => {
        if (!playerRef.current) return;

        if (isMuted) {
            playerRef.current.setVolume(1);
            playerRef.current.setMuted(false);
            playerRef.current.play();
            setIsMuted(false);
            setIsPlaying(true);
        } else {
            if (isPlaying) {
                playerRef.current.pause();
            } else {
                playerRef.current.play();
            }
        }
    };

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

                    {/* Vídeo do Vimeo Integrado - Minimalista */}
                    <div className="mt-12 flex justify-center" ref={containerRef}>
                        <div className="w-full max-w-[340px] md:max-w-[400px] relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1.5 bg-[#00ff99]/15 blur-2xl rounded-[2.5rem] pointer-events-none transition-opacity duration-700" />

                            <div className="relative overflow-hidden rounded-[2.2rem] border-2 border-white/10 shadow-[0_0_30px_rgba(0,255,153,0.15)] bg-black transition-transform duration-500 hover:scale-[1.01]">
                                <div style={{ padding: '175.56% 0 0 0', position: 'relative' }}>
                                    <iframe
                                        src="https://player.vimeo.com/video/1172368948?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&background=0"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="econyx"
                                        className="pointer-events-none"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                    />

                                    {/* Central Interaction Layer */}
                                    <div
                                        className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center group"
                                        onClick={handleInteraction}
                                    >
                                        {(!isPlaying || isMuted) && isReady && (
                                            <div className="w-20 h-20 rounded-full bg-[#00ff99] flex items-center justify-center shadow-[0_0_40px_rgba(0,255,153,0.5)] transition-transform duration-300 group-hover:scale-110">
                                                <Play className="w-10 h-10 text-black fill-black ml-1" />
                                            </div>
                                        )}

                                        {isPlaying && !isMuted && (
                                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <Pause className="w-8 h-8 text-white fill-white" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
