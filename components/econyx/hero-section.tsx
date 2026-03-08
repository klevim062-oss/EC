"use client"

import { ArrowRight, ArrowDown, Check, TrendingUp, BarChart3 } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { Reveal } from "./reveal"
import { PhoneMockup } from "./phone-mockup"

export function HeroSection() {
  return (
    <section id="topo" className="py-[clamp(44px,5vw,84px)] relative scroll-mt-[86px]">
      <div className="max-w-[1120px] mx-auto px-[18px]">
        <Reveal>


          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-[18px] items-center mt-4">
            <div>
              <h1 className="my-2.5 text-[clamp(30px,4vw,54px)] leading-[1.1] tracking-tight font-black text-[var(--ink)] text-balance uppercase">
                {'Transforme sua vida financeira com a ECONYX'}
              </h1>
              <p className="mb-1.5 text-[rgba(214,225,255,0.86)] font-bold leading-relaxed text-[clamp(15.5px,1.6vw,18px)] max-w-[64ch]">
                {'a plataforma que organiza, antecipa e ajuda você a economizar antes de gastar.'}
              </p>
              <p className="mb-3.5 text-[rgba(214,225,255,0.86)] font-bold leading-relaxed text-[clamp(15.5px,1.6vw,18px)] max-w-[64ch]">
                {'Tenha seu mês, seus cartões e seu futuro financeiro conectados em uma única visão. Descubra onde está perdendo dinheiro, encontre onde pode pagar menos e pare de descobrir problemas depois.'}
              </p>


              <div className="flex flex-wrap gap-2 mt-3">
                {["Saldo real", "Cart\u00e3o sob controle", "Vis\u00e3o do m\u00eas", "Sem confus\u00e3o"].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 px-2.5 py-2 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] text-[rgba(234,240,255,0.88)] font-black text-xs tracking-wide"
                  >
                    <span className="w-2 h-2 rounded-full bg-[rgba(24,208,122,0.85)]" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-2.5 gap-x-3.5 text-[rgba(234,240,255,0.86)] font-black text-[13px]">
                <span className="inline-flex gap-2 items-center">
                  <Check className="w-4 h-4 text-[rgba(24,208,122,0.95)]" strokeWidth={2.4} />
                  Acesso imediato
                </span>
                <span className="inline-flex gap-2 items-center">
                  <BarChart3 className="w-4 h-4 text-[rgba(24,208,122,0.95)]" strokeWidth={2.4} />
                  Garantia 7 dias
                </span>
                <span className="inline-flex gap-2 items-center">
                  <TrendingUp className="w-4 h-4 text-[rgba(24,208,122,0.95)]" strokeWidth={2.4} />
                  Clareza na tela
                </span>
              </div>
            </div>

            <Reveal delay="0.08s">
              <PhoneMockup />
            </Reveal>
          </div>

          <div className="eco-divider" />
        </Reveal>
      </div>
    </section>
  )
}
