"use client"

import { ArrowRight, ArrowUp } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { Reveal } from "./reveal"

export function CtaSection() {
  return (
    <section id="cta-final" className="py-[clamp(44px,5vw,84px)] relative scroll-mt-[86px]">
      <div className="max-w-[1120px] mx-auto px-[18px]">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-2.5 py-2 rounded-full bg-[rgba(24,208,122,0.08)] border border-[rgba(24,208,122,0.18)] text-[rgba(234,240,255,0.92)] backdrop-blur-[10px] font-black text-xs tracking-[0.10em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[var(--green-lite)] shadow-[0_0_0_6px_rgba(24,208,122,0.12)]" />
            FECHAMENTO
          </div>

          <h2 className="text-[clamp(26px,3.1vw,44px)] leading-[1.06] font-black tracking-tight mt-3 mb-2.5 text-[var(--ink)] text-balance">
            Bora parar de decidir no escuro?
          </h2>
          <p className="m-0 max-w-[78ch] text-[rgba(214,225,255,0.84)] leading-relaxed font-bold text-base">
            {"Se quer "}
            <strong>controle real</strong>
            {"\u2026 come\u00e7a hoje."}
          </p>

          <div className="flex flex-wrap gap-3 mt-3.5">
            <MagneticButton href="#planos" variant="primary" pulse>
              <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.4} />
              Escolher meu plano
            </MagneticButton>
            <MagneticButton href="#topo" variant="ghost">
              <ArrowUp className="w-[18px] h-[18px]" strokeWidth={2.4} />
              Voltar ao topo
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
