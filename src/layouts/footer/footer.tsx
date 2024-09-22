import { useEffect, useRef, useState } from "react"

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
    <footer
      className={`bg-gradient-to-t from-[#4a4975]  to-[#FFFFFF] ${isVisible ? "animate-slideInBottom" : "opacity-0"}`}
      ref={sectionRef}>
      <div className="container mx-auto px-[18px] py-5  md:px-20 sm:py-10 ">
        <div className="relative bg-[url('/bg2.jpg')] inset-0 bg-cover bg-center h-[300px] rounded-[30px] p-2 px-0 xl:px-64 lg:px-40 sm:px-10 sm:p-10  flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col  text-black items-center md:ml-20 md:text-left ">
            <h2 className="mb-1 sm:mb-5 text-xl  xl:text-3xl text-shadow-xl  font-bold text-center ">
              Boost Confidence with Realistic Mock Tests
            </h2>
            <p className="mb-2 sm:mb-5 text-center text-shadow-xl text-md lg:text-lg font-extralight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              <br /> text ever since the 1500s
            </p>
          </div>
        </div>

        <div className="mt-9 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-5 mb-6 md:mb-0">
            <span className="text-white font-bold text-3xl">
              <span>
                <span className="bg-gradient-to-t from-[#4a4975]  to-[#FFFFFF] rounded-full text-black">
                  C
                </span>
                <span>S</span>
              </span>
            </span>
          </div>

          <nav className="flex space-x-10  pb-2 sm:pb-0 text-gray-900">
            <Link href="#" className="hover:text-gray-500  ">
              Home
            </Link>
            <Link href="#pricing" className="hover:text-gray-500 ">
              Pruducts
            </Link>
            <Link href="#faq" className="hover:text-gray-500 ">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-2   text-gray-900">
            <Call />
            <span>+998 99 933 08 05</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
