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
    <header className="shadow-xl  rounded-b-[36px] xl:rounded-none fixed w-full top-0 z-50 bg-gradient-to-b from-[#4a4975]  to-[#FFFFFF] bg-opacity-90 ">
      <div className="container mx-auto flex items-center justify-between px-[18px] py-5 md:px-20">
        <div className="text-2xl text-white font-bold sm:text-3xl">
          <Link href="/">
            <span>
              <span className="text-black">N</span>
              <span className="text-sm">eruda.uz</span>
            </span>
          </Link>
        </div>
        <nav className="flex space-x-4 text-sm text-black">
          <Link href="#home" className="hidden sm:flex">
            Afzalliklar
          </Link>
          <Link href="#pricing" className="hidden sm:flex">
            Maxsulotlar
          </Link>
          <Link href="#module" className="hidden sm:flex">
            Aloqa
          </Link>
          <Link href="tel:+998909423499">{"+998 (90) 942-34-99"}</Link>
        </nav>
        <div className="flex flex-row items-center space-x-8">
          <Select
            defaultValue="uz"
            onValueChange={(value) => router.push(`/${value}`)}>
            <SelectTrigger className="text-black border-none">
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
