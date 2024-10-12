import { HambergerMenu } from "iconsax-react"
import Image from "next/image"
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

export const LandingHeaderEn = () => {
  const params = usePathname()
  const router = useRouter()
  console.log(params)

  return (
    <header className="shadow-xl  rounded-b-[36px] xl:rounded-none fixed w-full top-0 z-50 bg-black bg-opacity-90 ">
      <div className="container mx-auto flex items-center justify-between px-[18px] py-5 md:px-20">
        <div className="text-2xl text-white font-bold sm:text-3xl">
          <Link href="/">
            <div className="max-w-[100px] max-h-[80px] sm:max-w-[160px] sm:max-h-[80px]">
              <Image src="/logo.png" width={100} height={50} alt="logo" />
            </div>
          </Link>
        </div>
        <nav className="flex space-x-4 text-sm text-white">
          <Link href="#home" className="hidden sm:flex">
            Advantage
          </Link>
          <Link href="#pricing" className="hidden sm:flex">
            Products
          </Link>
          <Link href="#module" className="hidden sm:flex">
            Contacts
          </Link>
          <Link href="tel:+998901876808">{"+998 (90) 187-68-08"}</Link>
        </nav>
        <div className="flex flex-row items-center space-x-8">
          <Select
            defaultValue="en"
            onValueChange={(value) => router.push(`/${value}`)}>
            <SelectTrigger className=" border-none text-white">
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
