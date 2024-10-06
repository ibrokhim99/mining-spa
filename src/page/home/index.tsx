"use client"

import BenefitsSection from "./sections/benefits"
import FAQSection from "./sections/faq"
import { Gallery } from "./sections/gallery"
import { HeroSection } from "./sections/hero"
import { Partners } from "./sections/partners"
import { PricingSection } from "./sections/pricing"
import { TrustedSection } from "./sections/trusted"
import Footer from "@/layouts/footer/footer"
import { LandingHeader } from "@/layouts/header/landing-header"

export const HomePageComponent = () => {
  return (
    <>
      <div className="bg-[#E0E7FE]">
        <LandingHeader />
      </div>
      <HeroSection id="home" />
      <BenefitsSection />
      <Gallery />
      <PricingSection id="pricing" />
      <TrustedSection />
      <Partners />
      <FAQSection id="faq" />
      <Footer />
    </>
  )
}
