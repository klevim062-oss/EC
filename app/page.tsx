"use client"

import { useState, useEffect } from "react"
import { FxBackground } from "@/components/econyx/fx-background"
import { ProgressBar } from "@/components/econyx/progress-bar"
import { Nav } from "@/components/econyx/nav"
import { HeroSection } from "@/components/econyx/hero-section"
import { NewsSection } from "@/components/econyx/news-section"
import { TurningPointSection } from "@/components/econyx/turning-point-section"
import { EconyxScrollSection } from "@/components/econyx/econyx-scroll-section"
import { SocialProofSection } from "@/components/econyx/social-proof-section"
import { PlansSection } from "@/components/econyx/plans-section"
import { CtaSection } from "@/components/econyx/cta-section"
import { VSLSection } from "@/components/econyx/vsl-section"
import { SpecialistSection } from "@/components/econyx/specialist-section"

// Deployment trigger: 2026-03-08 12:45
export default function Page() {
  useEffect(() => {
    console.log("VSL SYSTEM: 1.2.4-DEFINITIVE-READY")
  }, [])
  const [vslFinished, setVslFinished] = useState(false)

  useEffect(() => {
    if (!vslFinished) {
      // Lock scroll when VSL is active
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      // Release scroll after VSL finishes
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      // Smooth scroll to the top of the content
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return () => {
      // Cleanup to ensure scroll is always released if component unmounts
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [vslFinished])

  return (
    <>
      <FxBackground />
      {!vslFinished ? (
        <VSLSection onFinished={() => setVslFinished(true)} />
      ) : (
        <>
          <ProgressBar />
          <Nav />
          <main>
            <HeroSection />
            <NewsSection />
            <TurningPointSection />
            <EconyxScrollSection />
            <SocialProofSection />
            <SpecialistSection />
            <PlansSection />
            <CtaSection />
          </main>
        </>
      )}
    </>
  )
}
