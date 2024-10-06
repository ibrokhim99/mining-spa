import { HambergerMenu } from "iconsax-react"
import Link from "next/link"
import { useParams, usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const LandingHeader = () => {
  const params = usePathname()
  const router = useRouter()
  console.log(params)

  return (
    <header className="shadow-xl  rounded-b-[36px] xl:rounded-none fixed w-full top-0 z-50 bg-black bg-opacity-90 ">
      <div className="container mx-auto flex items-center justify-between px-[18px] py-5 md:px-20">
        <div className="text-2xl text-white font-bold sm:text-3xl">
          <Link href="/">
            <span>
              <span className="bg-gradient-to-t from-[#4a4975]  to-[#FFFFFF] rounded-full text-black">
                N
              </span>{" "}
              <span className="text-sm">eruda.uz</span>
            </span>
          </Link>
        </div>
        <nav className="flex space-x-4 text-sm text-white">
          <Link href="#home" className="hidden sm:flex">
            Afzalliklar
          </Link>
          <Link href="#pricing" className="hidden sm:flex">
            Maxsulotlar
          </Link>
          <Link href="#module" className="hidden sm:flex">
            Aloqa
          </Link>
          <Link href="tel:+998901876808">{"+998 (90) 187-68-08"}</Link>
        </nav>
        <div className="flex flex-row items-center space-x-8">
          <Select
            defaultValue="uz"
            onValueChange={(value) => router.push(`/${value}`)}>
            <SelectTrigger className="text-white border-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uz">UZ</SelectItem>
              <SelectItem value="ru">RU</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}
