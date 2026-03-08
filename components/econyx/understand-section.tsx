"use client"

import { Play, CheckCircle2, CreditCard, Target } from "lucide-react"
import { Reveal } from "./reveal"
import { TiltCard } from "./tilt-card"

export function UnderstandSection() {
    return (
        <section id="entenda" className="py-[clamp(44px,5vw,84px)] relative scroll-mt-[86px]">
            <div className="max-w-[1120px] mx-auto px-[18px]">
                <Reveal>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-2 rounded-full bg-[rgba(24,208,122,0.08)] border border-[rgba(24,208,122,0.18)] text-[rgba(234,240,255,0.92)] backdrop-blur-[10px] font-black text-xs tracking-[0.10em] uppercase">
                        <span className="w-2 h-2 rounded-full bg-[var(--green-lite)] shadow-[0_0_0_6px_rgba(24,208,122,0.12)]" />
                        ENTENDA A ECONYX
                    </div>

                    {/* Title */}
                    <h2 className="text-[clamp(26px,3.1vw,44px)] leading-[1.06] font-black tracking-tight mt-3 mb-2.5 text-[var(--ink)] text-balance">
                        O que é a ECONYX?
                    </h2>

                    {/* Explanatory Text */}
                    <div className="max-w-[78ch] text-[rgba(214,225,255,0.84)] leading-relaxed font-bold text-base space-y-4">
                        <p>
                            A ECONYX não é apenas uma planilha.
                            <br />
                            É um sistema de clareza financeira.
                        </p>
                        <p>
                            Ela organiza presente, cartão e futuro em uma única visão.
                            <br />
                            Mostra números, consequências e decisões antes que virem problemas.
                        </p>
                        <p>
                            Não é sobre controlar dinheiro.
                            <br />
                            É sobre enxergar antes.
                        </p>
                        <p className="text-[var(--ink)]">
                            A ECONYX transforma dados soltos em direção estratégica.
                        </p>
                    </div>

                    {/* Video Container */}
                    <div className="mt-8 relative aspect-video w-full rounded-[24px] overflow-hidden bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(24,208,122,0.15)] to-transparent opacity-50" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <div className="w-20 h-20 rounded-full bg-[rgba(24,208,122,0.1)] border border-[rgba(24,208,122,0.2)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                <Play className="w-8 h-8 text-[var(--green-lite)] fill-[var(--green-lite)] ml-1" />
                            </div>
                            <p className="text-[var(--ink)] font-black text-lg tracking-tight uppercase opacity-60">
                                AQUI VAI O VÍDEO EXPLICANDO O QUE É A ECONYX
                            </p>
                        </div>
                        {/* Bottom legend */}
                        <div className="absolute bottom-4 left-6 py-1 px-3 rounded-full bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md">
                            <p className="text-[rgba(234,240,255,0.6)] text-[10px] font-black uppercase tracking-widest">
                                Vídeo explicativo
                            </p>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                        <Reveal delay="0.1s">
                            <TiltCard className="h-full">
                                <div className="mb-4">
                                    <span className="w-10 h-10 rounded-[14px] grid place-items-center bg-[rgba(24,208,122,0.10)] border border-[rgba(24,208,122,0.18)]">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--green-lite)]" strokeWidth={2.4} />
                                    </span>
                                </div>
                                <h3 className="text-lg font-black tracking-tight text-[var(--ink)] mb-3">
                                    Painel Financeiro Inteligente
                                </h3>
                                <div className="space-y-2 text-[rgba(214,225,255,0.82)] font-bold text-sm leading-relaxed">
                                    <p>Você registra e o sistema mostra:</p>
                                    <ul className="space-y-1">
                                        <li className="flex items-center gap-2">
                                            <span className="text-[var(--green-lite)]">✔</span> Seu mês inteiro organizado
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-[var(--green-lite)]">✔</span> Categorias claras
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-[var(--green-lite)]">✔</span> Saldo real disponível
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-[var(--green-lite)]">✔</span> Projeção antes do fim do mês
                                        </li>
                                    </ul>
                                    <p className="mt-4 text-[rgba(214,225,255,0.6)] text-xs">
                                        O diferencial não é só ver. É saber o que fazer com a informação.
                                    </p>
                                </div>
                            </TiltCard>
                        </Reveal>

                        <Reveal delay="0.2s">
                            <TiltCard className="h-full">
                                <div className="mb-4">
                                    <span className="w-10 h-10 rounded-[14px] grid place-items-center bg-[rgba(24,208,122,0.10)] border border-[rgba(24,208,122,0.18)]">
                                        <CreditCard className="w-5 h-5 text-[var(--green-lite)]" strokeWidth={2.4} />
                                    </span>
                                </div>
                                <h3 className="text-lg font-black tracking-tight text-[var(--ink)] mb-3">
                                    Controle Estratégico de Cartões
                                </h3>
                                <div className="space-y-4 text-[rgba(214,225,255,0.82)] font-bold text-sm leading-relaxed">
                                    <p>
                                        Parcelamentos deixam de ser armadilha.
                                        <br />
                                        Você vê o impacto antes de decidir.
                                    </p>
                                    <p>
                                        Você para de descobrir problemas depois.
                                        <br />
                                        Você começa a evitar antes.
                                    </p>
                                </div>
                            </TiltCard>
                        </Reveal>

                        <Reveal delay="0.3s">
                            <TiltCard className="h-full">
                                <div className="mb-4">
                                    <span className="w-10 h-10 rounded-[14px] grid place-items-center bg-[rgba(24,208,122,0.10)] border border-[rgba(24,208,122,0.18)]">
                                        <Target className="w-5 h-5 text-[var(--green-lite)]" strokeWidth={2.4} />
                                    </span>
                                </div>
                                <h3 className="text-lg font-black tracking-tight text-[var(--ink)] mb-3">
                                    Planejamento Anual com Direção
                                </h3>
                                <div className="space-y-4 text-[rgba(214,225,255,0.82)] font-bold text-sm leading-relaxed">
                                    <p>
                                        Não é só sobreviver ao mês. É construir estabilidade.
                                    </p>
                                    <p>
                                        Você começa a enxergar quando pode guardar, investir, melhorar o padrão e quando precisa ajustar.
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
