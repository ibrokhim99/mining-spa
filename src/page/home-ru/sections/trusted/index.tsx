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
    <section className="py-40 mb-10 mt-8" ref={sectionRef}>
      <div className="container mx-auto px-[16px]  lg:px-20">
        <div className="text-center mb-[50px]">
          <h2
            className={`text-3xl sm:text-5xl ${isVisible ? "animate-slideInTop" : "opacity-0"}`}>
            О Нас
          </h2>
        </div>
        <div className="mt-12  ">
          <div className="">
            <p
              className={`text-xl font-bold ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              Кто мы
            </p>
            <ul
              className={`list-disc ml-5 sm:ml-10 text-md sm:text-xl space-y-2 text-gray-700 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              <li>
                <p className="text-sm md:text-xl mb-10 mt-2.5 md:mb-0">
                  Мы считаемся надежным партнером в поставке нерудных
                  строительных материалов. Наша команда специалистов всегда
                  готова ответить на любые ваши вопросы. Мы внимательно
                  относимся к отзывам и постоянно стремимся быстро улучшать наш
                  сервис.
                </p>
              </li>
            </ul>
            <p
              className={`text-xl font-bold mt-5 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              Наши услуги
            </p>
            <ul
              className={`list-disc ml-5 sm:ml-10 text-md sm:text-xl space-y-2 text-gray-700 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              <li>
                <h3 className="mt-2.5 font-semibold">Добыча материалов:</h3>
                <p className="text-sm md:text-xl mb-10 mt-2.5 md:mb-0">
                  Процесс производства нерудных строительных материалов
                  начинается с изучения территории, где будет происходить
                  добыча. После извлечения сырья оно отправляется на завод, где
                  проходит несколько этапов переработки, чтобы обеспечить вам
                  получение высококачественного конечного продукта.
                </p>
              </li>
              <li>
                <h3 className="mt-2.5 font-semibold">Доставка материалов:</h3>
                <p className="text-sm md:text-xl mb-10 mt-2.5 md:mb-0">
                  Мы осуществляем доставку нерудных материалов по Ташкенту и его
                  окрестностям. Наша задача — обеспечить клиентов постоянным
                  снабжением высококачественными материалами в любом необходимом
                  объеме. Все наши продукты соответствуют стандартам ГОСТ и
                  проходят тщательную проверку качества с нашей стороны,
                  независимо от размера заказа.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
