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
          <h2 className="text-3xl sm:text-5xl">Продукты</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <Card
            className={`transition-transform duration-600  p-5 ${isVisible ? "animate-slideInLeft" : "opacity-0"} hover:scale-125 `}>
            <div className="flex flex-col items-center ">
              <div className="max-h-[400px]">
                <Image
                  src="/klinets.png"
                  alt="Product 1"
                  className="mb-4 rounded-lg"
                  width={500}
                  height={100}
                />
              </div>

              <p className="text-center text-lg font-semibold">
                Клинец (0.1-0.8 mm)
              </p>
              <p className="text-center text-sm ">
                Цена: от 135 000 сум (с НДС)
              </p>
              <p className="text-center text-sm text-gray-400 ">
                Цены не включают доставку
              </p>
            </div>
          </Card>
          <Card
            className={`transition-transform duration-600 hover:scale-125 p-5 ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="flex flex-col items-center">
              <Image
                src="/prod1.png"
                alt="Product 2"
                width={500}
                height={400}
                className="mb-4 rounded-lg pb-[70px]"
              />

              <p className="text-center text-lg font-semibold">
                Щебень (0.8-0.22 mm)
              </p>
              <p className="text-center text-sm ">
                Цена: от 80 000 сум (с НДС)
              </p>
              <p className="text-center text-sm text-gray-400 ">
                Цены не включают доставку
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
