import { useEffect, useRef, useState } from "react"

import { CloudRainWind, Pickaxe } from "lucide-react"
import Image from "next/image"

export default function IeltsMockSection() {
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
    <section className="py-40 mb-10 mt-8" ref={sectionRef}>
      <div className="container mx-auto px-[18px] lg:px-20  flex flex-col items-cneter justify-start h-full">
        <div className="text-center mb-[50px]">
          <h2
            className={`text-3xl sm:text-5xl ${isVisible ? "animate-slideInTop" : "opacity-0"}`}>
            Наша Преимущества
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:gap-20">
          <div className="flex flex-col md:flex-row gap-8   md:gap-36">
            <div
              className={`w-1/2 flex items-center justify-center ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              <Image
                src="/car2.png"
                alt="Person using laptop"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
              />
            </div>
            <div
              className={`flex flex-col max-w-[440px] md:max-w-[550px] max-h-[550px] justify-center ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
              <div className="flex items-start flex-col gap-4 mb-6">
                <div className="flex flex-row items-center mb-2 sm:mb-10 ">
                  <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#BCCDFB4D] flex justify-center items-center">
                    {" "}
                    <Pickaxe className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-semibold pl-3 sm:pl-5">
                    {" "}
                    Доставка до вашего объекта.
                  </p>
                </div>
                <div>
                  <ul className="list-disc ml-5 sm:ml-10 text-md sm:text-xl space-y-2 text-gray-700">
                    <li>
                      Мы предоставляем услугу доставки грузов на ваш объект.
                    </li>
                    <li>В нашем автопарке есть разнообразная техника</li>
                    <li>подходящая для перевозки любых грузов.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex flex-col-reverse md:flex-row gap-8 md:gap-36 `}>
            <div
              className={`flex flex-col max-w-[440px] md:max-w-[550px] max-h-[550px] justify-center  ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              <div className="flex items-start  flex-col gap-4 mb-6">
                <div className="flex flex-row items-center mb-2 sm:mb-10 ">
                  <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#BCCDFB4D] flex justify-center items-center">
                    <CloudRainWind className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-semibold pl-3 sm:pl-5">
                    Доступные цены
                  </p>
                </div>
                <div className="flex items-start justify-start">
                  <ul className="list-disc ml-5 sm:ml-10  text-md sm:text-xl space-y-2  text-gray-700">
                    <li>
                      Большой опыт работы в производстве строительных материалов
                    </li>
                    <li>
                      Многолетний опыт в производстве строительных материалов
                      позволяет нам оптимизировать процесс, снижая затраты
                      времени и ресурсов.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`w-1/2 flex items-center justify-center  ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
              <Image
                src="/car3.png"
                alt="Person using laptop"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
