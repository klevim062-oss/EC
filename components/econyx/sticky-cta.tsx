"use client"

import { ArrowRight } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

export function StickyCta() {
  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-[95] px-3 py-2.5 bg-[rgba(5,7,11,0.78)] backdrop-blur-[12px] border-t border-[rgba(255,255,255,0.08)] hidden max-md:block"
      role="region"
      aria-label="A\u00e7\u00e3o r\u00e1pida"
    >
      <div className="max-w-[1120px] mx-auto flex items-center justify-between gap-2.5">
        <div className="flex flex-col gap-0.5 min-w-0">
          <strong className="font-black text-[13px] text-[var(--ink)]">
            {"Master com ECONYX\u2122"}
          </strong>
          <span className="font-extrabold text-xs text-[rgba(214,225,255,0.70)]">
            Planilha + IA no dia a dia
          </span>
        </div>
        <MagneticButton href="#planos" variant="primary" pulse>
          <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.4} />
          Quero
        </MagneticButton>
      </div>
    </div>
  )
}
