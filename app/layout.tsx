import type { Metadata } from "next"
import { Geist_Mono, Roboto, Inter } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Merasc Technologies OÜ",
  description:
    "Merasc Technologies develops software products and digital tools for online businesses across e-commerce, SaaS, AI, and connected systems.",
  icons: {
    icon: "/merasc-kare-removebg.png",
    shortcut: "/merasc-kare-removebg.png",
    apple: "/merasc-kare-removebg.png",
  },
}

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" })

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        fontMono.variable,
        roboto.variable,
        interHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
