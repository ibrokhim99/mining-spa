import React from "react"

import Autoplay from "embla-carousel-autoplay"

export const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  )
  return (
    <section className="relative h-screen flex items-center justify-center mb-10 ">
      <div className="absolute inset-0  bg-cover bg-center bg-[url('/bg4.jpeg')] filter opacity-90 "></div>
      <div className="container mx-auto text-center flex flex-row items-center justify-center px-[18px] lg:px-20 relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold   text-white text-center animate-slideInTop text-shadow shadow-white">
          Shag`al <br /> va
          <br />
          Klinets
        </h1>
      </div>
    </section>
  )
}
