import React from "react"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface Props {
  id: string
}

export const HeroSection = ({ id }: Props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  )
  return (
    <section
      id={id}
      className="relative h-screen flex items-center justify-center mb-10 ">
      <div className="absolute inset-0 animate-slideBackground bg-cover bg-center filter blur-sm opacity-90 will-change-bg"></div>
      <div className="container mx-auto text-center flex flex-row items-center justify-center px-[18px] lg:px-20 relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold  w-1/2 text-center animate-slideInTop text-shadow-lg shadow-white">
          Crashed Stones
        </h1>
      </div>
    </section>
  )
}
