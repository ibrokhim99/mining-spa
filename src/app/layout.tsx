import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "react-day-picker/dist/style.css"

import { Toaster } from "@/components/ui/toaster"

import "./globals.css"
import { cn } from "@/lib/utils"
import QueryClientProvider from "@/providers/query-client"
import { UserAuthProvider } from "@/providers/user-auth/user-auth-provider"

export const metadata: Metadata = {
  metadataBase: new URL("https://neruda.uz"),
  title: "Neruda",
  description: "Neruda",
  authors: [
    {
      name: "Ibrokhim Ismoilov",
      url: "https://neruda.uz",
    },
  ],
  icons: { icon: "/favicon.png" },
  keywords:
    "Tog' jinsi toshlari, Tosh konlari savdosi,Konchilik toshlari,Klinets sotib olish,Ezilgan toshlar,Qurilish toshlari,Tosh qazib olish,Minerallar va toshlar,Tabiiy toshlar,Qimmatbaho toshlar,Sheben, Klinets, Uzbekiston sheben, Toshkent sheben, Uzbekiston klinets,Toshkent klinets,Драгоценные камни,Продажа горных камней,Минеральные камни,Покупка клинкера,Дробленый камень,Камни для строительства,Горные минералы,Природные камни,Продажа клинца и камней,Драгоценные и дробленые камни, Камни Ташкент,Ташкент шебень,Ташкент клинкец",
  openGraph: {
    title: "Neruda.uz",
    description: "Ibrokhim Ismoilov",
    type: "website",
    url: "https://neruda.uz",
    locale: "uz_UZ",
    images: "/mock-ielts.png",
    countryName: "Uzbekistan",
    siteName: "Neruda",
    emails: "hello@neruda.uz",
  },
}

const inter = Inter({ subsets: ["cyrillic"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "flex flex-col min-h-screen")}
        suppressHydrationWarning={true}>
        <main className="grow">
          <QueryClientProvider>
            <UserAuthProvider>
              {children}
              <Toaster />
            </UserAuthProvider>
          </QueryClientProvider>
        </main>
      </body>
    </html>
  )
}
