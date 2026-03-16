"use client"

import * as React from "react"
import { Check, ArrowRight, X } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { MagneticButton } from "./magnetic-button"
import { cn } from "@/lib/utils"

interface UpsellModalProps {
    isOpen: boolean
    onClose: () => void
}

export function UpsellModal({ isOpen, onClose }: UpsellModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[500px] border-[rgba(24,208,122,0.15)] bg-[#070B12] text-[var(--ink)] p-0 overflow-hidden rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
                {/* Header/Banner Area */}
                <div className="relative h-32 bg-gradient-to-br from-[#0e1a14] to-[#070b12] border-b border-white/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--green-lite),_transparent_70%)]" />
                    </div>
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-[rgba(24,208,122,0.1)] border border-[rgba(24,208,122,0.2)] grid place-items-center">
                        <Check className="w-8 h-8 text-[var(--green-lite)]" strokeWidth={2.5} />
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/40 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-8">
                    <DialogHeader className="text-left mb-6">
                        <DialogTitle className="text-2xl font-black tracking-tight mb-2">
                            Antes de continuar...
                        </DialogTitle>
                        <DialogDescription className="text-[rgba(214,225,255,0.85)] font-bold leading-relaxed text-base">
                            Você está prestes a escolher o Plano Básico, mas pode estar deixando de lado a opção mais completa para ter mais clareza, suporte e evolução financeira.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 mb-8">
                        <p className="text-sm text-[rgba(214,225,255,0.7)] font-medium italic">
                            "O Plano Master foi pensado para quem quer ir além do básico e ter uma ajuda mais estratégica na organização financeira. Com ele, você tem muito mais recursos, mais clareza e uma estrutura mais completa para aplicar no seu dia a dia."
                        </p>

                        <ul className="grid gap-3">
                            {[
                                "Acesso mais completo",
                                "Recursos mais avançados",
                                "Mais clareza na organização financeira",
                                "Apoio de um agente/assistente para ajudar no processo",
                                "Melhor custo-benefício comparado ao plano básico",
                            ].map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm font-bold text-[var(--ink)]">
                                    <span className="w-5 h-5 rounded-full bg-[rgba(24,208,122,0.1)] border border-[rgba(24,208,122,0.2)] grid place-items-center shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-[var(--green-lite)]" strokeWidth={3} />
                                    </span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <MagneticButton
                            href="https://zuckpay.com.br/checkout/econyx"
                            variant="primary"
                            className="w-full py-4 text-base"
                            pulse
                        >
                            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                            Quero adicionar o Plano Master
                        </MagneticButton>

                        <a
                            href="https://zuckpay.com.br/checkout/econyx-1"
                            className="text-center py-2 text-xs font-bold text-[rgba(214,225,255,0.4)] hover:text-[rgba(214,225,255,0.8)] transition-colors uppercase tracking-widest underline underline-offset-4"
                        >
                            Quero o Plano Básico mesmo assim
                        </a>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
