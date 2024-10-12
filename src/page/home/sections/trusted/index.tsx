import { useEffect, useRef, useState } from "react"

export const TrustedSection = () => {
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
    <section className="py-40 pb-2 mt-8" ref={sectionRef}>
      <div className="container mx-auto px-[16px]  lg:px-20">
        <div className="text-center mb-[50px]">
          <h2
            className={`text-3xl sm:text-5xl ${isVisible ? "animate-slideInTop" : "opacity-0"}`}>
            Biz haqimizda
          </h2>
        </div>
        <div className="mt-12  ">
          <div className="">
            <p
              className={`text-xl font-bold ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              Kimmiz
            </p>
            <ul
              className={`list-disc ml-5 sm:ml-10 text-md sm:text-xl space-y-2 text-gray-700 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              <li>
                <p className="text-sm md:text-xl mb-10 mt-2.5 md:mb-0">
                  Biz ishonchli hamkor bo‘lib, qurilish uchun zarur bo‘lgan
                  materiallarni yetkazib berishda tajribamiz bor. Bizning
                  jamoada sodiq mutaxassislar bor, ular har doim sizning
                  savollaringizga javob berishga tayyor. Biz mijozlarimizning
                  fikrlariga e’tibor beramiz va xizmatlarimizni tezda
                  yaxshilashga harakat qilamiz.
                </p>
              </li>
            </ul>
            <p
              className={`text-xl font-bold mt-5 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              Bizning hizmatlar
            </p>
            <ul
              className={`list-disc ml-5 sm:ml-10 text-md sm:text-xl space-y-2 text-gray-700 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              <li>
                <h3 className="mt-2.5 font-semibold">
                  Materiallarni qazib olish:
                </h3>
                <p className="text-sm md:text-xl mb-10 mt-2.5 md:mb-0 ml-2">
                  qurilish materiallarini ishlab chiqarish jarayoni qazib olish
                  uchun mo‘ljallangan joyni o‘rganishdan boshlanadi. Xom ashyo
                  olingandan so‘ng, u zavga jo‘natiladi va turli qayta ishlash
                  bosqichlaridan o‘tadi, bu orqali siz sifatli tayyor mahsulotni
                  olasiz.
                </p>
              </li>
              <li>
                <h3 className="mt-2.5 font-semibold">
                  Materiallarni yetkazib berish:
                </h3>
                <p className="text-sm md:text-xl mb-10 mt-2.5 md:mb-0 ml-2">
                  Biz Toshkent va uning atrofida nerudli materiallarni yetkazib
                  beramiz. Mijozlarga har qanday miqdorda yuqori sifatli
                  materiallarning doimiy yetkazib berilishini ta`minlashga
                  intilamiz. Bizning barcha mahsulotlar GOST standartlariga mos
                  keladi va buyurtma hajmiga qaramay, biz tomonidan sinchkovlik
                  bilan sifat nazoratidan o‘tkaziladi.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-[150px]">
          <h2
            className={`text-3xl sm:text-5xl ${isVisible ? "animate-slideInTop" : "opacity-0"}`}>
            Bizning hamkorlarimiz
          </h2>
        </div>
      </div>
    </section>
  )
}
