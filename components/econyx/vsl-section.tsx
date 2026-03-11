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
 * Minimalist version: Only video + central play/pause button.
 * Preserves 01:24 reveal logic.
 */
export function VSLSection({ onFinished }: { onFinished: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const playerRef = useRef<any>(null)
    const finishedRef = useRef(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [isReady, setIsReady] = useState(false)

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

                player.on('play', () => setIsPlaying(true))
                player.on('pause', () => setIsPlaying(false))
                player.on('ended', () => handleFinish())

                // Funnel Logic: Reveal at 01:24 (84 seconds)
                player.on('timeupdate', (data: { seconds: number }) => {
                    if (data.seconds >= 84) {
                        handleFinish()
                    }
                })

                player.ready().then(() => {
                    setIsReady(true)
                    // Initial attempt to play (usually muted due to browser policy)
                    player.play().then(() => {
                        setIsPlaying(true)
                    }).catch(() => {
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

    const handleCentralInteraction = () => {
        if (!playerRef.current) return

        if (isMuted) {
            // First click: Unmute and ensure it's playing
            playerRef.current.setVolume(1)
            playerRef.current.setMuted(false)
            playerRef.current.play()
            setIsMuted(false)
            setIsPlaying(true)
        } else {
            // Subsequent clicks: Toggle Play/Pause
            if (isPlaying) {
                playerRef.current.pause()
            } else {
                playerRef.current.play()
            }
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

                {/* Central Play/Pause Button - Minimalist Style */}
                <div
                    className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center group"
                    onClick={handleCentralInteraction}
                >
                    {(!isPlaying || isMuted) && isReady && (
                        <div className="w-24 h-24 rounded-full bg-[#00ff99] flex items-center justify-center shadow-[0_0_50px_rgba(0,255,153,0.6)] transition-transform duration-300 group-hover:scale-110">
                            <Play className="w-12 h-12 text-black fill-black ml-1" />
                        </div>
                    )}

                    {isPlaying && !isMuted && (
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Pause className="w-10 h-10 text-white fill-white" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
