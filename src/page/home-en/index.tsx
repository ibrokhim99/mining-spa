"use client"

import BenefitsSection from "./sections/benefits"
import FAQSection from "./sections/faq"
import { HeroSection } from "./sections/hero"
import { PricingSection } from "./sections/pricing"
import { TrustedSection } from "./sections/trusted"
import Footer from "@/layouts/footer/footer"
import { LandingHeaderEn } from "@/layouts/header/hader-en"

export const HomeEnPageComponent = () => {
  return (
    <>
      <div className="bg-[#E0E7FE]">
        <LandingHeaderEn />
      </div>
      <HeroSection id="home" />
      <BenefitsSection />
      <PricingSection id="pricing" />
      <TrustedSection />
      <FAQSection id="faq" />
      <Footer />
    </>
  )
}
