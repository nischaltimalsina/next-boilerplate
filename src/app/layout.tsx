import { siteConfig } from "@/config/site"
import "@/styles/globals.css"

import { type Children } from "@/types"
import { type Metadata, type Viewport } from "next"

import { Toaster } from "@/components/ui"
import { ThemeProvider } from "@/context/theme-provider"
import { Inter } from "next/font/google"
import { SessionProvider } from "@/context/session-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const generalKeywords = [
  "next js",
  "react",
  "development",
  "boilerplate",
  "frontend",
  "next auth",
]
const targetAudienceKeywords = [
  "developers",
  "designers",
  "students",
  "frontend developer",
]
const actionKeywords = ["connect", "rate", "star", "follow"]

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...generalKeywords, ...targetAudienceKeywords, ...actionKeywords],
  authors: [
    {
      name: "Nischal Timalsina",
      url: "https://nischaltimalsina.com.np",
    },
  ],
  creator: "nischaltimalsina",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@thelunaticlad",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SessionProvider>{children}</SessionProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
