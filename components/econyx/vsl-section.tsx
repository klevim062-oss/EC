"use client"

import React, { useEffect, useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

declare global {
    interface Window {
        Vimeo: any;
    }
}

/**
 * VSLSection Component
 * 
 * Optimized for vertical video (portrait) to fill the screen on mobile.
 * Features custom play/pause controls while hiding generic Vimeo UI.
 */
export function VSLSection({ onFinished }: { onFinished: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const playerRef = useRef<any>(null)
    const finishedRef = useRef(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const [needsInteraction, setNeedsInteraction] = useState(false)

    const handleFinish = () => {
        if (finishedRef.current) return
        finishedRef.current = true
        onFinished()
    }

    useEffect(() => {
        const script = document.createElement('script')
        script.src = "https://player.vimeo.com/api/player.js"
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            const iframe = containerRef.current?.querySelector('iframe')
            if (iframe && window.Vimeo) {
                const player = new window.Vimeo.Player(iframe)
                playerRef.current = player

                player.on('play', () => {
                    setIsPlaying(true)
                    setNeedsInteraction(false)
                })
                player.on('pause', () => setIsPlaying(false))
                player.on('ended', () => handleFinish())

                // REQUISITO: Finalizar exatamente em 01:24 (84 segundos)
                player.on('timeupdate', (data: { seconds: number }) => {
                    console.log("Current time:", data.seconds)
                    if (data.seconds >= 84) {
                        handleFinish()
                    }
                })

                player.ready().then(() => {
                    setIsReady(true)
                    // Tentar iniciar com som
                    player.setVolume(1)
                    player.setMuted(false)

                    player.play().catch((error) => {
                        console.log("Autoplay blocked or muted:", error)
                        setNeedsInteraction(true)
                        setIsPlaying(false)
                    })
                })
            }
        }

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [onFinished])

    const startWithSound = () => {
        if (!playerRef.current) return
        playerRef.current.setVolume(1)
        playerRef.current.setMuted(false)
        playerRef.current.play()
        setNeedsInteraction(false)
        setIsPlaying(true)
    }

    const togglePlay = () => {
        if (!playerRef.current) return
        if (isPlaying) {
            playerRef.current.pause()
        } else {
            playerRef.current.play()
        }
    }

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
            <div
                className="relative w-full h-full md:h-[90vh] md:max-w-none md:aspect-[9/16] bg-black overflow-hidden flex items-center justify-center"
                ref={containerRef}
            >
                <iframe
                    src="https://player.vimeo.com/video/1171209632?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&background=0"
                    className="w-full h-full pointer-events-none"
                    style={{
                        aspectRatio: '9/16',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="VSL ECONYX"
                />

                {/* Overlay Principal para Clique */}
                <div
                    className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center group"
                    onClick={needsInteraction ? startWithSound : togglePlay}
                >
                    {/* Botão de Iniciar com Som (Call to Action) */}
                    {needsInteraction && (
                        <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
                            <div className="w-24 h-24 rounded-full bg-[#00ff99] flex items-center justify-center shadow-[0_0_50px_rgba(0,255,153,0.6)]">
                                <Play className="w-12 h-12 text-black fill-black ml-1" />
                            </div>
                            <span className="text-white font-bold text-lg tracking-tight bg-black/60 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                Clique para Ativar o Som
                            </span>
                        </div>
                    )}

                    {/* Botão de Play convencional quando pausado (mas já teve interação) */}
                    {!isPlaying && !needsInteraction && isReady && (
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform group-hover:scale-110">
                            <Play className="w-10 h-10 text-white fill-white ml-1" />
                        </div>
                    )}

                    {/* Indicador de Status (Pause) */}
                    {isPlaying && (
                        <div className="absolute bottom-10 right-10 flex items-center justify-center p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Pause className="w-6 h-6 text-white" />
                        </div>
                    )}
                </div>

                {/* Tag de Apresentação */}
                <div className="absolute top-10 left-10 z-20 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 pointer-events-none">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00ff99] animate-pulse" />
                    <span className="text-[11px] uppercase tracking-[0.2em] font-black text-white">Apresentação Oficial</span>
                </div>
            </div>
        </div>
    )
}
