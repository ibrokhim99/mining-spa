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
    <section className="py-40 pb-0  mt-8" ref={sectionRef}>
      <div className="container mx-auto px-[16px]  lg:px-20">
        <div className="text-center mb-[50px]">
          <h2
            className={`text-3xl sm:text-5xl ${isVisible ? "animate-slideInTop" : "opacity-0"}`}>
            About us
          </h2>
        </div>
        <div className="mt-12  ">
          <div className="">
            <p
              className={`text-xl font-bold ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              Who we are
            </p>
            <ul
              className={`list-disc ml-5 sm:ml-10 text-md sm:text-xl space-y-2 text-gray-700 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              <li>
                <p className="text-sm md:text-xl mb-10 mt-2.5 md:mb-0">
                  We are a reliable partner in construction work for the supply
                  and delivery of carshed stone and klinets materials. Our
                  company employs dedicated specialists who are always ready to
                  advise you on any questions you may have. We always listen to
                  feedback on our work and strive to improve our service for our
                  clients as quickly as possible
                </p>
              </li>
            </ul>
            <p
              className={`text-xl font-bold mt-5 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              Our service
            </p>
            <ul
              className={`list-disc ml-5 sm:ml-10 text-md sm:text-xl space-y-2 text-gray-700 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
              <li>
                <h3 className="mt-2.5 font-semibold">
                  Extraction of stone materials:
                </h3>
                <p className="text-sm md:text-xl mb-10 mt-2.5 md:mb-0 ml-2">
                  The process of manufacturing stone construction materials
                  starts with assessing the location designated for rock
                  extraction. Once the raw materials are obtained, they are
                  transported to the factory, where they go through various
                  processing stages to deliver a high-quality final product to
                  you
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Delivery of stone materials:</h3>
                <p className="text-sm md:text-xl mb-10 mt-2.5 md:mb-0 ml-2">
                  We offer delivery of stone materials across Tashkent . Our
                  commitment is to provide clients with a steady supply of
                  high-quality materials in any quantity needed. All our
                  products meet GOST standards and are subject to thorough
                  quality checks on our end, regardless of the order size
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-[100px]">
          <h2
            className={`text-3xl sm:text-5xl ${isVisible ? "animate-slideInTop" : "opacity-0"}`}>
            Our partners
          </h2>
        </div>
      </div>
    </section>
  )
}
