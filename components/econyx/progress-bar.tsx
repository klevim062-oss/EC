"use client"

import { useEffect, useRef } from "react"

export function ProgressBar() {
  const barRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    function handleScroll() {
      if (!barRef.current) return
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0
      barRef.current.style.width = pct.toFixed(2) + "%"
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="progress-bar-track" aria-hidden="true">
      <span ref={barRef} className="progress-bar-fill" />
    </div>
  )
}
