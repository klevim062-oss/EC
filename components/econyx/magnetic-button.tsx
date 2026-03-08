"use client"

import { useRef, useCallback, type ReactNode, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "ghost" | "danger" | "gold"

const variantStyles: Record<Variant, string> = {
  primary:
    "text-[#041008] bg-gradient-to-br from-[var(--green-lite)] to-[var(--green)] shadow-[0_16px_46px_rgba(15,169,88,0.22)] hover:shadow-[0_18px_62px_rgba(24,208,122,0.30)]",
  ghost:
    "text-[var(--ink)] bg-[rgba(255,255,255,0.06)] border-[rgba(255,255,255,0.10)] shadow-[0_14px_44px_rgba(0,0,0,0.35)] hover:bg-[rgba(255,255,255,0.09)]",
  danger:
    "text-white bg-gradient-to-br from-[var(--danger)] to-[#ff6b6b] shadow-[0_16px_46px_rgba(239,68,68,0.22)] hover:shadow-[0_18px_62px_rgba(239,68,68,0.30)]",
  gold:
    "text-[#1a1405] bg-gradient-to-b from-[#FFD84D] via-[#FFC300] to-[#D4A017] shadow-[inset_0_2px_12px_rgba(255,255,255,0.45),0_10px_30px_rgba(255,200,0,0.30)] border-transparent rounded-full",
}

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  variant?: Variant
  pulse?: boolean
  className?: string
  onClick?: () => void
}

export function MagneticButton({
  children,
  href,
  variant = "primary",
  pulse = false,
  className,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)
  const rippleContainerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px) translateY(-1px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = ""
  }, [])

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const container = rippleContainerRef.current
      if (!container) return
      const r = container.getBoundingClientRect()
      const span = document.createElement("span")
      span.className = "ripple-effect"
      span.style.left = e.clientX - r.left + "px"
      span.style.top = e.clientY - r.top + "px"
      container.appendChild(span)
      setTimeout(() => span.remove(), 520)
      onClick?.()
    },
    [onClick]
  )

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-[14px] border border-transparent font-black text-sm cursor-pointer select-none whitespace-nowrap will-change-transform transition-[transform,box-shadow,background,border-color,color] duration-150 ease-out hover:-translate-y-px",
    variantStyles[variant],
    pulse && (variant === "gold" ? "pulse-gold" : "pulse-ring"),
    className
  )

  const content = (
    <>
      <div
        ref={rippleContainerRef}
        className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none btn-shine"
      />
      <span className="relative z-10 flex items-center gap-2.5 pointer-events-none">
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {content}
    </button>
  )
}
