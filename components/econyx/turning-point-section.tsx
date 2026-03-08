"use client"

import { AlignJustify, BarChart3 } from "lucide-react"
import { Reveal } from "./reveal"
import { TiltCard } from "./tilt-card"

export function TurningPointSection() {
  return (
    <section id="virada" className="py-[clamp(44px,5vw,84px)] relative scroll-mt-[86px] mb-24 md:mb-40">
      <div className="max-w-[1120px] mx-auto px-[18px]">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-2.5 py-2 rounded-full bg-[rgba(24,208,122,0.08)] border border-[rgba(24,208,122,0.18)] text-[rgba(234,240,255,0.92)] backdrop-blur-[10px] font-black text-xs tracking-[0.10em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[var(--green-lite)] shadow-[0_0_0_6px_rgba(24,208,122,0.12)]" />
            A VIRADA
          </div>

          <h2 className="text-[clamp(26px,3.1vw,44px)] leading-[1.06] font-black tracking-tight mt-3 mb-2.5 text-[var(--ink)] text-balance">
            {"N\u00e3o era falta de dinheiro. Era falta de vis\u00e3o."}
          </h2>
          <p className="m-0 max-w-[78ch] text-[rgba(214,225,255,0.84)] leading-relaxed font-bold text-base">
            {'Eu tava \u201ccontrolando\u201d? N\u00e3o. Eu tava '}
            <strong>reagindo</strong>.
            <br />
            {'E sim\u2026 come\u00e7ou a dar briga em casa por conta e cart\u00e3o.'}
            <br /><br />
            {'Teve dia que eu pensei duas vezes antes de comprar um lanche pro meu filho. N\u00e3o por falta de trabalho\u2026 '}
            <strong>por falta de certeza.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-[18px]">
            <Reveal>
              <TiltCard>
                <h3 className="m-0 font-black tracking-tight text-[var(--ink)] flex items-center gap-2.5 text-base relative">
                  <span className="w-[34px] h-[34px] rounded-[14px] grid place-items-center bg-[rgba(24,208,122,0.10)] border border-[rgba(24,208,122,0.18)] shrink-0">
                    <AlignJustify className="w-[18px] h-[18px] text-[var(--green-lite)]" strokeWidth={2.2} />
                  </span>
                  {"O erro cl\u00e1ssico"}
                </h3>
                <p className="m-0 mt-1.5 text-[rgba(214,225,255,0.82)] leading-relaxed font-bold relative">
                  {'Parcelas pequenas + cart\u00e3o + \u201cm\u00eas que vem eu resolvo\u201d. A bomba vai s\u00f3 acumulando.'}
                </p>
              </TiltCard>
            </Reveal>

            <Reveal delay="0.06s">
              <TiltCard>
                <h3 className="m-0 font-black tracking-tight text-[var(--ink)] flex items-center gap-2.5 text-base relative">
                  <span className="w-[34px] h-[34px] rounded-[14px] grid place-items-center bg-[rgba(24,208,122,0.10)] border border-[rgba(24,208,122,0.18)] shrink-0">
                    <BarChart3 className="w-[18px] h-[18px] text-[var(--green-lite)]" strokeWidth={2.2} />
                  </span>
                  {"A solução real"}
                </h3>
                <div className="m-0 mt-2 text-[rgba(214,225,255,0.82)] leading-relaxed font-bold relative space-y-2.5 text-sm">
                  <p>
                    Eu achava que o problema era o valor da fatura.
                    <br />
                    Mas o problema era não enxergar o impacto antes.
                  </p>
                  <p>
                    Eu não via o mês inteiro.
                    <br />
                    Eu via só o agora.
                  </p>
                  <p>
                    Eu tomava decisão no escuro.
                    <br />
                    E pagava depois.
                  </p>
                  <p className="text-[var(--ink)]">
                    Foi quando eu percebi:
                    <br />
                    eu não precisava de mais esforço.
                  </p>
                  <p>
                    Eu precisava de um sistema que mostrasse tudo numa tela só.
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          </div>
          <div className="eco-divider" />
        </Reveal>
      </div>
    </section>
  )
}
