import { useEffect, useRef, useState } from "react"

import { Placemark, YMaps } from "@pbe/react-yandex-maps"
import { Map } from "@pbe/react-yandex-maps"
import { Call } from "iconsax-react"
import Image from "next/image"

type IProps = {
  id: string
}

const Footer = ({ id }: IProps) => {
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
        id={id}
        className={`bg-gradient-to-t from-[#4a4975]  to-[#FFFFFF] ${isVisible ? "animate-slideInBottom" : "opacity-0"}`}
        ref={sectionRef}>
        <div className="container mx-auto px-[18px] py-5  md:px-20 sm:py-10 ">
          <div className="h-[300px]   flex justify-center items-center">
            <div className="w-full h-full rounded-[30px] overflow-hidden">
              <Map
                defaultState={{ center: [40.944835, 69.432272], zoom: 15 }}
                width="100%"
                height="100%">
                <Placemark geometry={[40.944835, 69.432272]} />
              </Map>
            </div>
          </div>

          <div className="mt-9 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-5 mb-6 md:mb-0">
              <div className="max-w-[100px] max-h-[80px] sm:max-w-[260px] sm:max-h-[160px]">
                <Image src="/logo.png" width={150} height={100} alt="logo" />
              </div>
            </div>

            <nav className="flex space-x-10  pb-2 sm:pb-0 text-gray-900">
              Тошкент вилояти, Пискент тумани, Лола Арик
            </nav>

            <div className="flex items-center space-x-2   text-gray-900">
              <Call />
              <span>+998 90 942 34 99</span>
            </div>
          </div>
        </div>
      </footer>
    </YMaps>
  )
}

export default Footer
