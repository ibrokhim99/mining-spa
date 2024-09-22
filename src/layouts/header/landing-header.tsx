import { HambergerMenu } from "iconsax-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const LandingHeader = () => {
  const router = useRouter()
  return (
    <header className="shadow-xl  rounded-b-[36px] xl:rounded-none fixed w-full top-0 z-50 bg-black bg-opacity-90 ">
      <div className="container mx-auto flex items-center justify-between px-[18px] py-5 md:px-20">
        <div className="text-2xl text-white font-bold sm:text-3xl">
          <Link href="/">
            <span>
              <span className="bg-gradient-to-t from-[#4a4975]  to-[#FFFFFF] rounded-full text-black">
                C
              </span>
              <span>S</span>
            </span>
          </Link>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <nav className="flex space-x-10 text-sm text-white">
            <Link href="#home">Advantage</Link>
            <Link href="#pricing">Products</Link>
            <Link href="#module">Contacts</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
