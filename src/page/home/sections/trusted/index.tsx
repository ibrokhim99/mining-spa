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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                <p className="text-sm md:text-xl mb-10 mt-2.5 md:mb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
