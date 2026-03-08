"use client"

import { ArrowRight, ShoppingCart, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { MagneticButton } from "./magnetic-button"
import { Reveal } from "./reveal"
import { TiltCard } from "./tilt-card"
import RealismButton from "@/components/ui/shiny-borders-button"

function CheckItem({ children, variant = "green" }: { children: React.ReactNode, variant?: "green" | "gold" | "orange" }) {
  const isGold = variant === "gold";
  const isOrange = variant === "orange";
  return (
    <li className="flex gap-2.5 items-start text-[rgba(234,240,255,0.88)] font-bold leading-normal text-[14.5px] relative">
      <span className={cn(
        "w-5 h-5 rounded-[10px] grid place-items-center shrink-0 mt-0.5 border shadow-[0_0_15px_rgba(255,145,0,0.15)]",
        isOrange
          ? "bg-gradient-to-b from-[#FFD84D] to-[#D4AF37] border-transparent"
          : isGold
            ? "bg-[rgba(212,175,55,0.10)] border-[rgba(212,175,55,0.18)]"
            : "bg-[rgba(24,208,122,0.10)] border border-[rgba(24,208,122,0.18)]"
      )}>
        <Check className={cn("w-3.5 h-3.5", isOrange ? "text-[#1a1405]" : isGold ? "text-[#F5D76E]" : "text-[var(--green-lite)]")} strokeWidth={2.6} />
      </span>
      {children}
    </li>
  )
}

export function PlansSection() {
  return (
    <section id="planos" className="py-[clamp(44px,5vw,84px)] relative scroll-mt-[86px]">
      <div className="max-w-[1120px] mx-auto px-[18px]">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-2.5 py-2 rounded-full bg-[rgba(24,208,122,0.08)] border border-[rgba(24,208,122,0.18)] text-[rgba(234,240,255,0.92)] backdrop-blur-[10px] font-black text-xs tracking-[0.10em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[var(--green-lite)] shadow-[0_0_0_6px_rgba(24,208,122,0.12)]" />
            OFERTA
          </div>

          <h2 className="text-[clamp(26px,3.1vw,44px)] leading-[1.06] font-black tracking-tight mt-3 mb-2.5 text-[var(--ink)] text-balance">
            O próximo nível da sua vida financeira começa aqui.
          </h2>
          <p className="m-0 max-w-[78ch] text-[rgba(214,225,255,0.84)] leading-relaxed font-bold text-base">
            {"Come\u00e7a no b\u00e1sico\u2026 ou vai direto no modo \u201csem erro\u201d."}
          </p>

          <div className="mt-[18px] grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-3.5 items-stretch">
            {/* Basic Plan */}
            <Reveal>
              <TiltCard className="flex flex-col gap-3 h-full">
                <div className="flex justify-between items-start gap-2.5 relative">
                  <div>
                    <h3 className="m-0 font-black text-[var(--ink)] tracking-tight">
                      {'B\u00e1sico - Planilha Essencial'}
                    </h3>
                    <div className="mt-1.5 text-[rgba(214,225,255,0.78)] font-bold leading-relaxed text-[14.5px] relative">
                      Pra sair do caos e ter clareza das contas.
                    </div>
                  </div>
                  <div className="font-black text-[26px] text-[var(--ink)] text-right tracking-tight whitespace-nowrap relative">
                    R$ 9,90
                    <small className="block font-black text-xs text-[rgba(214,225,255,0.70)] tracking-wider mt-0.5">

                    </small>
                  </div>
                </div>

                <ul className="m-0 p-0 list-none grid gap-2.5 relative">
                  <CheckItem>Planilha simples e funcional</CheckItem>
                  <CheckItem>Controle mensal básico</CheckItem>
                  <CheckItem>Controle básico de entradas e saídas</CheckItem>
                </ul>

                <div className="mt-auto">
                  <MagneticButton href="#cta-final" variant="ghost">
                    <ShoppingCart className="w-[18px] h-[18px]" strokeWidth={2.4} />
                    {"Quero o B\u00e1sico"}
                  </MagneticButton>
                </div>
              </TiltCard>
            </Reveal>

            {/* Master Plan */}
            <Reveal delay="0.06s">
              <TiltCard className="flex flex-col gap-3 h-full border-[rgba(212,175,55,0.35)] shadow-[0_0_45px_rgba(212,175,55,0.22),0_30px_70px_rgba(0,0,0,0.65)] bg-gradient-to-b from-[#0e1418] to-[#0b0f12] master-card-animated">
                <div className="flex justify-between items-start gap-2.5 relative">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-b from-[#FFD84D] to-[#D4AF37] text-[#1a1405] font-black tracking-tight text-xs relative shadow-[0_0_18px_rgba(255,215,0,0.25)]">
                      <span className="w-2 h-2 rounded-full bg-[#1a1405]" />
                      MAIS ESCOLHIDO
                    </span>
                    <h3 className="m-0 mt-2.5 font-black text-[var(--ink)] tracking-tight">
                      {"Master \u2014 Planilha + ECONYX\u2122 IA"}
                    </h3>
                    <div className="mt-1.5 text-[rgba(214,225,255,0.78)] font-bold leading-relaxed text-[14.5px] relative">
                      {"Pra organizar + economizar + decidir com intelig\u00eancia."}
                    </div>
                  </div>
                  <div className="font-black text-[26px] text-[#F5D76E] text-right tracking-tight whitespace-nowrap relative">
                    R$ 19,90
                    <small className="block font-black text-xs text-[rgba(214,225,255,0.70)] tracking-wider mt-0.5">
                      pagamento unico
                    </small>
                  </div>
                </div>

                <hr className="border-white/10 my-1" />

                <ul className="m-0 p-0 list-none grid gap-2.5 relative">
                  <CheckItem variant="orange">{"Planilha completa + proje\u00e7\u00f5es"}</CheckItem>
                  <CheckItem variant="orange">{"Cart\u00f5es e parcelas sob controle"}</CheckItem>
                  <CheckItem variant="orange">Planejamento mensal/anual</CheckItem>
                  <CheckItem variant="orange">{"Agente IA ECONYX\u2122 (descontos + orienta\u00e7\u00e3o)"}</CheckItem>
                  <CheckItem variant="orange">{"Relat\u00f3rios e hist\u00f3rico salvo"}</CheckItem>
                </ul>

                <div className="p-3.5 rounded-[22px] bg-[rgba(212,175,55,0.07)] border border-[rgba(212,175,55,0.18)] text-[var(--ink)] font-black leading-relaxed">
                  {"Se voc\u00ea quer parar de \u201ctomar susto\u201d com cart\u00e3o e conta\u2026 \u00e9 esse aqui."}
                </div>

                <div className="mt-auto flex justify-center">
                  <RealismButton
                    text="Quero economizar agora"
                    onClick={() => {
                      const el = document.getElementById('cta-final');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full"
                  />
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
