import { useEffect, useRef, useState } from "react"

import { Placemark, YMaps } from "@pbe/react-yandex-maps"
import { Map } from "@pbe/react-yandex-maps"
import { Call } from "iconsax-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

const Footer = () => {
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
    <YMaps>
      <footer
        className={`bg-gradient-to-t from-[#4a4975]  to-[#FFFFFF] ${isVisible ? "animate-slideInBottom" : "opacity-0"}`}
        ref={sectionRef}>
        <div className="container mx-auto px-[18px] py-5  md:px-20 sm:py-10 ">
          <div className="h-[300px]   flex justify-center items-center">
            <div className="w-full h-full rounded-[30px] overflow-hidden">
              <Map
                defaultState={{ center: [41.2995, 69.2401], zoom: 15 }}
                width="100%"
                height="100%">
                <Placemark geometry={[41.2995, 69.2401]} />
              </Map>
            </div>
          </div>

          <div className="mt-9 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-5 mb-6 md:mb-0">
              <span className="text-white font-bold text-3xl">
                <span>
                  <span className="bg-gradient-to-t from-[#4a4975]  to-[#FFFFFF] rounded-full text-black">
                    N
                  </span>
                  <span>eruda.uz</span>
                </span>
              </span>
            </div>

            <nav className="flex space-x-10  pb-2 sm:pb-0 text-gray-900">
              Toshkent shaxar, Yunusboad tumani,Farog`at 3-tor, 20-uy
            </nav>

            <div className="flex items-center space-x-2   text-gray-900">
              <Call />
              <span>+998 99 832 67 89</span>
            </div>
          </div>
        </div>
      </footer>
    </YMaps>
  )
}

export default Footer
