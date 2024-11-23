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

export const LandingHeader = () => {
  const params = usePathname()
  const router = useRouter()

  return (
    <header className="shadow-xl  rounded-b-[36px] xl:rounded-none fixed w-full max-h-[100px] top-0 z-50 bg-black bg-opacity-90 ">
      <div className="container mx-auto flex items-center justify-between px-[18px] mb-5 py-2 md:px-20">
        <div className="text-2xl text-white font-bold sm:text-3xl">
          <Link href="/">
            <div className="max-w-[100px] max-h-[80px] sm:max-w-[160px] sm:max-h-[80px]">
              <Image src="/logo.png" width={130} height={45} alt="logo " />
            </div>
          </Link>
        </div>
        <nav className="flex space-x-10 text-lg text-white">
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
