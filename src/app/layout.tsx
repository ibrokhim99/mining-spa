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
  title: "Mock IELTS",
  description: "Generated by Global Move",
}

const inter = Inter({ subsets: ["cyrillic"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FVRHQ56PVR"></Script>
      <Script id="gtag">
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-FVRHQ56PVR')`}
      </Script>
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
