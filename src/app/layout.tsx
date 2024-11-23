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
  title: {
    default: "Neruda",
    template: "%s - Neruda",
  },
  description:
    "Explore high-quality construction and natural stones at Neruda.",
  authors: [
    {
      name: "Ibrokhim Ismoilov",
      url: "https://neruda.uz",
    },
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Tog' jinsi toshlari",
    "Tosh konlari savdosi",
    "Konchilik toshlari",
    "Klinets sotib olish",
    "Ezilgan toshlar",
    "Qurilish toshlari",
    "Tosh qazib olish",
    "Minerallar va toshlar",
    "Tabiiy toshlar",
    "Qimmatbaho toshlar",
  ],
  openGraph: {
    title: "Neruda.uz",
    description:
      "Find premium natural stones, crushed rocks, and construction materials in Uzbekistan.",
    type: "website",
    url: "https://neruda.uz",
    locale: "uz_UZ",
    images: [
      {
        url: "/mock-ielts.png",
        width: 1200,
        height: 630,
        alt: "Neruda Stones",
      },
    ],
    siteName: "Neruda",
  },
  twitter: {
    card: "summary_large_image",
    site: "@neruda_uz",
    title: "Neruda",
    description:
      "Discover high-quality natural stones and construction materials.",
    images: ["/mock-ielts.png"],
  },
}

const inter = Inter({ subsets: ["cyrillic"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="robots" content="index, follow"></meta>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://neruda.uz" />

        <link
          rel="preload"
          href={inter.style.fontFamily}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
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
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
