"use client"

import { useEffect, useRef, useCallback } from "react"

export function FxBackground() {
  const glowRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!glowRef.current) return
    glowRef.current.style.left = e.clientX + "px"
    glowRef.current.style.top = e.clientY + "px"
    glowRef.current.style.opacity = "0.55"

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (glowRef.current) glowRef.current.style.opacity = "0.35"
    }, 120)
  }, [])

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [handlePointerMove])

  return (
    <div className="fx-background" aria-hidden="true">
      <div className="scan-lines" />
      <div ref={glowRef} className="cursor-glow" />
      <span className="floating-particle" style={{ left: "12%", top: "22%" }} />
      <span className="floating-particle" style={{ left: "28%", top: "72%" }} />
      <span className="floating-particle" style={{ left: "62%", top: "18%" }} />
      <span className="floating-particle" style={{ left: "78%", top: "58%" }} />
      <span className="floating-particle" style={{ left: "88%", top: "28%" }} />
    </div>
  )
}
