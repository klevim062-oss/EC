"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { Reveal } from "./reveal"
import { TiltCard } from "./tilt-card"
import RealismButton from "@/components/ui/shiny-borders-button"

const newsItems = [
  {
    img: "/news1.jpg",
    caption: "Férias: 76% dos brasileiros já deixaram de viajar por falta de organização financeira, revela Serasa",
  },
  {
    img: "/news2.jpg",
    caption: "Metade dos trabalhadores aponta o dinheiro como maior causa de preocupação, diz pesquisa",
  },
  {
    img: "/news3.jpg",
    caption: "Endividamento das famílias atinge 79,5% em janeiro e iguala recorde, diz CNC",
  },
]

export function NewsSection() {
  return (
    <section id="noticias" className="py-[clamp(44px,5vw,84px)] relative scroll-mt-[86px]">
      <div className="max-w-[1120px] mx-auto px-[18px]">
        <Reveal>
          <div className="flex justify-center mb-10">
            <RealismButton
              text="Quero economizar agora"
              onClick={() => {
                const el = document.getElementById('planos');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>

          <h2 className="text-[clamp(26px,3.1vw,44px)] leading-[1.1] font-black tracking-tight mt-3 mb-2.5 text-[var(--ink)] text-balance">
            {'Foi aí que percebi que vários brasileiros estão se afundando cada vez mais.'}
          </h2>
          <p className="m-0 max-w-[78ch] text-[rgba(214,225,255,0.84)] leading-relaxed font-bold text-base">
            {'Trabalham, pagam contas, tentam se organizar — mas as parcelas acumulam, os juros crescem e o dinheiro nunca parece suficiente.'}
            <br /><br />
            {'O problema quase nunca é só renda.'}
            <br />
            <strong>{'É falta de visão.'}</strong>
          </p>

          <Reveal delay="0.06s">
            <div className="mt-3.5 grid grid-cols-1 md:grid-cols-3 gap-3">
              {newsItems.map((item) => (
                <TiltCard key={item.img} className="rounded-[28px] p-0 overflow-hidden">
                  {/* Image area with overlay */}
                  <div className="relative h-[170px] overflow-hidden rounded-t-[28px]">
                    <Image
                      src={item.img}
                      alt={item.caption}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Green overlay 12% opacity */}
                    <div className="absolute inset-0 bg-[rgba(5,40,20,0.13)]" />
                    {/* Subtle tech glow on border */}
                    <div className="absolute inset-0 rounded-t-[28px] shadow-[inset_0_0_0_1px_rgba(24,208,122,0.18)]" />
                  </div>
                  {/* Caption */}
                  <div className="px-3 py-2.5 border-t border-[rgba(255,255,255,0.08)] text-[13px] font-extrabold text-[rgba(234,240,255,0.86)] leading-snug">
                    {item.caption}
                  </div>
                </TiltCard>
              ))}
            </div>
          </Reveal>



          <div className="eco-divider" />
        </Reveal>
      </div>
    </section>
  )
}
