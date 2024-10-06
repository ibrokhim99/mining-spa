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
      <div className="absolute inset-0  bg-cover bg-center bg-[url('/bg4.jpeg')] filter opacity-90 "></div>
      <div className="container mx-auto text-center flex flex-row items-center justify-center px-[18px] lg:px-20 relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold   text-white text-center animate-slideInTop text-shadow shadow-white">
          Щебень
          <br />
          И<br />
          Клинец
        </h1>
      </div>
    </section>
  )
}
