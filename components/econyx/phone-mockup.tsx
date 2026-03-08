"use client"

import { useEffect, useRef, useState, useCallback } from "react"

function useAnimatedNumber(to: number, duration: number, format: (v: number) => string) {
  const [display, setDisplay] = useState(format(0))

  useEffect(() => {
    const start = performance.now()
    let raf: number

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration)
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      const val = to * eased
      setDisplay(format(val))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, duration, format])

  return display
}

export function PhoneMockup() {
  const [time, setTime] = useState("")
  const [wavePhase, setWavePhase] = useState(0)

  const formatCurrency = useCallback(
    (v: number) =>
      "R$ " +
      v.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    []
  )

  const formatSaldo = useCallback(
    (v: number) => "R$ " + Math.round(v).toLocaleString("pt-BR"),
    []
  )

  const formatPercent = useCallback((v: number) => Math.round(v) + "%", [])

  const saldoReal = useAnimatedNumber(718, 3200, formatSaldo)
  const riscoCartao = useAnimatedNumber(15, 3200, formatPercent)
  const saldoPositivo = useAnimatedNumber(3589.64, 3600, formatCurrency)

  useEffect(() => {
    function updateTime() {
      const d = new Date()
      const hh = String(d.getHours()).padStart(2, "0")
      const mm = String(d.getMinutes()).padStart(2, "0")
      setTime(`${hh}:${mm}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  // Wave animation loop - Slow and gentle
  useEffect(() => {
    let raf: number
    const tick = (now: number) => {
      setWavePhase(now * 0.001) // 0.001 is very slow and smooth
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Dynamic Path Points
  const getWavyY = (baseY: number, xOffset: number) =>
    baseY + Math.sin(wavePhase + xOffset) * 4

  const p = {
    s: { x: 0, y: getWavyY(125, 0) },
    c1: { x: 60, y: getWavyY(120, 1) },
    c2: { x: 100, y: getWavyY(110, 2) },
    m: { x: 150, y: getWavyY(105, 3) },
    c3: { x: 200, y: getWavyY(100, 4) },
    c4: { x: 250, y: getWavyY(95, 5) },
    e: { x: 340, y: getWavyY(80, 6) }
  }

  const dPath = `M${p.s.x},${p.s.y} C${p.c1.x},${p.c1.y} ${p.c2.x},${p.c2.y} ${p.m.x},${p.m.y} C${p.c3.x},${p.c3.y} ${p.c4.x},${p.c4.y} ${p.e.x},${p.e.y}`
  const dFill = `${dPath} L340,165 L0,165 Z`

  return (
    <div style={{ position: "relative", background: "transparent", padding: 0 }}>
      <div className="relative w-[min(360px,92vw)] z-[2]">
        <div className="phone-inner">
          {/* Status bar */}
          <div className="relative pt-1.5 mb-2.5 z-[2]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[130px] h-6 bg-[rgba(0,0,0,0.55)] border border-[rgba(255,255,255,0.08)] rounded-b-2xl backdrop-blur-[10px]" />
            <div className="flex justify-between items-center font-extrabold text-xs text-[rgba(234,240,255,0.85)] px-1.5">
              <span className="opacity-80">{'\u25CF\u25CF\u25CF\u25CF'}</span>
              <span className="tracking-widest">{time}</span>
              <span className="opacity-80">{'\u25AE\u25AE\u25AE\u25AF'}</span>
            </div>
          </div>

          {/* App header */}
          <div className="relative z-[2] mt-2.5 mb-2.5">
            <div className="flex justify-between items-center gap-2.5">
              <span className="text-[11px] tracking-[0.18em] uppercase text-[rgba(234,240,255,0.78)] font-black">
                {'APP ECONYX'}
              </span>
              <span className="inline-flex items-center gap-2 px-2.5 py-[7px] rounded-full bg-[rgba(24,208,122,0.08)] border border-[rgba(24,208,122,0.18)] text-[rgba(234,240,255,0.92)] font-black text-[11px] tracking-[0.10em] uppercase">
                <span className="w-2 h-2 rounded-full bg-[var(--green-lite)] shadow-[0_0_0_6px_rgba(24,208,122,0.12)]" />
                SALDO REAL
              </span>
            </div>
          </div>

          {/* KPIs */}
          <div className="relative z-[2] grid grid-cols-2 gap-2.5 mb-2.5">
            <KpiCard label="SALDO REAL" value={saldoReal} hint="Depois de contas + parcelas." />
            <KpiCard label="DIVIDAS ATIVAS" value={riscoCartao} hint="Comprometimento para ser pago." />
            <KpiCard label="SALDO POUPANÇA" value={saldoPositivo} hint="Valor livre (sem susto)." green className="col-span-2" />
          </div>

          {/* Chart Section - Exactly like user screenshot */}
          <div className="relative z-[2] bg-[#0c1312] border border-white/5 rounded-[24px] p-3 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />

            <div className="flex justify-between items-center mb-3 relative z-10 px-1">
              <span className="text-[15px] font-extrabold text-[#eef3f8] tracking-tight">
                {'Evolução (ao vivo)'}
              </span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-[#00f7a5] shadow-[0_0_10px_#00f7a5] animate-pulse" />
                <span className="text-[12px] font-bold text-[#dce6ef]">
                  {'Atualizando\u2026'}
                </span>
              </div>
            </div>

            <div className="h-[165px] rounded-[22px] bg-[#081514]/95 border border-white/5 overflow-hidden relative z-[2] shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
              {/* Grid Background */}
              <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 32px'
                }}
              />

              {/* AI Label */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-[#00f7a5]/20 rounded-full backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f7a5] shadow-[0_0_8px_#00f7a5] animate-pulse" />
                <span className="text-[11px] font-bold text-[#dffef4] tracking-tight">IA ECONYX analisando dados</span>
              </div>

              {/* Economy Badge - Matches Reference */}
              <div className="absolute top-[48px] right-3 z-20 p-3.5 px-6 rounded-2xl bg-black/60 border border-[#00f7a5]/10 backdrop-blur-lg shadow-xl text-right">
                <div className="text-[#00f7a5] text-[22px] font-black leading-none tracking-tight drop-shadow-[0_0_15px_rgba(0,247,165,0.4)]">
                  R$ 327,40
                </div>
                <div className="text-[9px] font-bold text-white/50 uppercase tracking-widest mt-1.5">Economizados este mês</div>
              </div>

              {/* SVG Chart Line */}
              <svg className="absolute inset-0 w-full h-full z-[5]" viewBox="0 0 340 165" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="glowArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(0,247,165,0.2)" />
                    <stop offset="100%" stopColor="rgba(0,247,165,0)" />
                  </linearGradient>
                </defs>

                <style jsx>{`
                  @keyframes drawPath {
                    from { stroke-dashoffset: 450; }
                    to { stroke-dashoffset: 0; }
                  }
                  @keyframes flow {
                    from { stroke-dashoffset: 450; }
                    to { stroke-dashoffset: 0; }
                  }
                  @keyframes pulseRing {
                    0% { transform: scale(0.6); opacity: 0.8; }
                    100% { transform: scale(1.6); opacity: 0; }
                  }
                `}</style>

                {/* Fill */}
                <path
                  d={dFill}
                  fill="url(#glowArea)"
                />

                {/* Flowing Light Effect (Streaming) */}
                <path
                  d={dPath}
                  fill="none"
                  stroke="#00ffaa"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: "20, 100",
                    strokeDashoffset: 450,
                    animation: 'flow 4s linear infinite',
                    filter: 'blur(2px)',
                    opacity: 0.6
                  }}
                />

                {/* Main Line with Glow shadow */}
                <path
                  d={dPath}
                  fill="none"
                  stroke="#00f7a5"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 450,
                    strokeDashoffset: 450,
                    animation: 'drawPath 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                    filter: 'drop-shadow(0 0 8px rgba(0,247,165,0.8))'
                  }}
                />

                {/* Intermediary Points */}
                <circle cx="85" cy={getWavyY(116, 1.5)} r="3.5" fill="#c6fff0" stroke="#00f7a5" strokeWidth="1.5" className="animate-pulse" />
                <circle cx="170" cy={getWavyY(103, 3)} r="3.5" fill="#c6fff0" stroke="#00f7a5" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />

                {/* End Point Analysis */}
                <g className="animate-pulse">
                  <circle cx={p.e.x} cy={p.e.y} r="4.5" fill="#fff" style={{ filter: 'drop-shadow(0 0 12px #fff)' }} />
                  <circle cx={p.e.x} cy={p.e.y} r="14" fill="none" stroke="#00f7a5" strokeWidth="1" className="origin-center" style={{ animation: 'pulseRing 2s infinite' }} />
                </g>
              </svg>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-3.5 p-3.5 rounded-[22px] bg-[rgba(24,208,122,0.07)] border border-[rgba(24,208,122,0.18)] text-[var(--ink)] font-black leading-relaxed text-sm">
            {'Isso aqui \u00e9 o tipo de clareza que faz voc\u00ea parar de decidir no escuro.'}
          </div>
        </div>
      </div>
    </div>
  )
}

function KpiCard({
  label,
  value,
  hint,
  green = false,
  className,
}: {
  label: string
  value: string
  hint: string
  green?: boolean
  className?: string
}) {
  return (
    <div className={`bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] rounded-[18px] p-3 relative overflow-hidden ${className || ""}`}>
      <div className="absolute inset-[-1px] bg-[radial-gradient(700px_220px_at_60%_0%,rgba(24,208,122,0.18),transparent_55%)] opacity-70 pointer-events-none" />
      <div className="text-[11px] tracking-[0.14em] uppercase text-[rgba(234,240,255,0.74)] font-black mb-1.5 relative z-[2]">
        {label}
      </div>
      <div
        className={`text-[22px] font-black tracking-tight relative z-[2] ${green ? "text-[rgba(24,208,122,0.95)]" : "text-[var(--ink)]"
          }`}
        style={green ? { textShadow: "0 0 22px rgba(24,208,122,0.18)" } : undefined}
      >
        {value}
      </div>
      <div className="mt-1.5 text-xs text-[rgba(214,225,255,0.72)] font-bold relative z-[2]">
        {hint}
      </div>
    </div>
  )
}
