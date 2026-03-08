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
    const [isPlaying, setIsPlaying] = useState(true)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        // Dynamically load the Vimeo SDK
        const script = document.createElement('script')
        script.src = "https://player.vimeo.com/api/player.js"
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            const iframe = containerRef.current?.querySelector('iframe')
            if (iframe && window.Vimeo) {
                const player = new window.Vimeo.Player(iframe)
                playerRef.current = player

                player.on('play', () => setIsPlaying(true))
                player.on('pause', () => setIsPlaying(false))
                player.on('ended', () => onFinished())

                // REQUISITO: Finalizar em 01:24 (84 segundos)
                player.on('timeupdate', (data: { seconds: number }) => {
                    if (data.seconds >= 84) {
                        onFinished()
                    }
                })

                player.ready().then(() => {
                    setIsReady(true)
                    // Forçar volume no máximo e tentar dar play com áudio
                    player.setVolume(1)
                    player.play().catch(() => {
                        setIsPlaying(false)
                        console.log("Autoplay with audio blocked. User interaction required.")
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
            {/* 
          Container optimized for portrait video.
          On mobile: fills the width and height (9:16 ratio usually).
          On desktop: centered and appropriately sized.
      */}
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

                {/* Custom Overlay for Play/Pause */}
                <div
                    className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center group"
                    onClick={togglePlay}
                >
                    {/* Large play button when paused */}
                    {!isPlaying && isReady && (
                        <div className="w-20 h-20 rounded-full bg-[#00ff99]/90 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,153,0.5)] transition-transform group-hover:scale-110">
                            <Play className="w-10 h-10 text-black fill-black ml-1" />
                        </div>
                    )}

                    {/* Small status indicator in the corner */}
                    <div className="absolute bottom-6 right-6 flex items-center justify-center p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                        {isPlaying ? (
                            <Pause className="w-5 h-5 text-white" />
                        ) : (
                            <Play className="w-5 h-5 text-white fill-white" />
                        )}
                    </div>
                </div>

                {/* Decorative indicator */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/5 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-[#00ff99] animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-black text-white/60">Apresentação Oficial</span>
                </div>
            </div>
        </div>
    )
}
