import { useEffect, useRef, useState } from "react"

import Image from "next/image"

interface Props {
  id: string
}

export default function Component({ id }: Props) {
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
    <section id={id} className="bg-[#F5F9FC] py-40 mb-10" ref={sectionRef}>
      <div className="container mx-auto text-center px-[18px] lg:px-20">
        <div className="text-center mb-8">
          <h2
            className={`text-3xl sm:text-5xl  ${isVisible ? "animate-slideInTop" : "opacity-0"}`}>
            Bizning yetkazib beruvchi yuk mashinamiz
          </h2>
        </div>
        <div className="text-left mb-[50px] w-full flex flex-row">
          <div
            className={`w-1/2  flex  flex-col items-center justify-center  ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-5xl text-[#4a4975] ">Truck Howo</h2>
            <p className="text-sm mt-4">Yuk hajmi- 20 кубов</p>
          </div>

          <div
            className={`w-1/2 flex items-center justify-center  ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <Image src="/truck.png" alt="truck" width={400} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
