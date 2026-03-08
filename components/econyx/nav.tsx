"use client"

import { ArrowRight, TrendingUp } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

export function Nav() {
  return (
    <header className="sticky top-0 z-80 bg-[rgba(5,7,11,0.72)] backdrop-blur-[14px] border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1120px] mx-auto px-[18px]">
        <div className="h-16 flex items-center justify-between gap-3">
          <a
            className="flex items-center gap-2.5 font-black tracking-wide text-[var(--ink)] select-none"
            href="#topo"
            aria-label="ECONYX"
          >
            <span className="mark-shine relative w-9 h-9 rounded-[14px] grid place-items-center bg-gradient-to-br from-[var(--green-dark)] to-[var(--green)] shadow-[0_18px_90px_rgba(24,208,122,0.18)] overflow-hidden">
              <TrendingUp className="w-[18px] h-[18px] text-white relative z-[1]" strokeWidth={2.2} />
            </span>
            {'ECONYX\u2122'}
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2.5 text-[rgba(234,240,255,0.86)] font-extrabold text-[12.5px] tracking-wide whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[var(--green-lite)] shadow-[0_0_0_6px_rgba(24,208,122,0.12)]" />
              {'Acesso imediato \u2022 Garantia 7 dias'}
            </div>
            <MagneticButton href="#planos" variant="primary" pulse>
              <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.4} />
              Quero organizar
            </MagneticButton>
          </div>
        </div>
      </div>
    </header>
  )
}
