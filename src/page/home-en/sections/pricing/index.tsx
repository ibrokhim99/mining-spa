import { useEffect, useRef, useState } from "react"

import Image from "next/image"

import { Card } from "@/components/ui/card"

interface Props {
  id: string
}

export const PricingSection = ({ id }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  return (
    <section id={id} className="bg-[#F5F9FC] py-40" ref={sectionRef}>
      <div className="container mx-auto px-[18px] flex flex-col items-center justify-center  lg:px-20">
        <div
          className={`text-center mb-[50px] ${isVisible ? "animate-slideInTop" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-5xl">Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <Card
            className={`transition-transform duration-600  p-5 ${isVisible ? "animate-slideInLeft" : "opacity-0"} hover:scale-125 `}>
            <div className="flex flex-col items-center">
              <Image
                src="/prod1.jpg"
                alt="Product 1"
                width={500}
                height={400}
                className="mb-4 rounded-lg"
              />
              <p className="text-center text-lg font-semibold">
                Crushed stone (40-70 mm)
              </p>
              <p className="text-center text-sm ">Price: 130 000 sum / м</p>
            </div>
          </Card>
          <Card
            className={`transition-transform duration-600 hover:scale-125 p-5 ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="flex flex-col items-center">
              <Image
                src="/prod1.jpg"
                alt="Product 2"
                width={500}
                height={400}
                className="mb-4 rounded-lg"
              />
              <p className="text-center text-lg font-semibold">
                Crushed stone (40-70 mm)
              </p>
              <p className="text-center text-sm ">Price: 130 000 sum / м</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
