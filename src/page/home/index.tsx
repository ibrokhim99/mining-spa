"use client"

import BenefitsSection from "./sections/benefits"
import FAQSection from "./sections/faq"
import { HeroSection } from "./sections/hero"
import { PricingSection } from "./sections/pricing"
import { ReviewsSection } from "./sections/reviews"
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
      <PricingSection id="pricing" />
      <TrustedSection />
      <FAQSection id="faq" />
      <Footer />
    </>
  )
}
