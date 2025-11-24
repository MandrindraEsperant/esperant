import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Mandrindra Espérant | Développeur Full Stack & Architecte Logiciel",
  description:
    "Portfolio de Mandrindra Espérant, développeur Full Stack spécialisé en TypeScript, Python, Java, Node.js, Spring Boot, React, Next.js, mobile Expo et conception UML. Projets, compétences, réalisations et contacts.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Mandrindra Espérant",
    "développeur full stack Madagascar",
    "full stack developer",
    "développeur web Madagascar",
    "portfolio développeur",
    "TypeScript",
    "Python",
    "Mobile Expo",
    "Java",
    "Node.js",
    "React",
    "Next.js",
    "Spring Boot",
    "Java developer",
    "Développeur backend Madagascar",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mandrindra Espérant | Développeur Full Stack",
    description:
      "Découvrez le portfolio professionnel de Mandrindra Espérant : projets, compétences, technologies modernes et contact.",
    url: "https://esperant-porfolio.vercel.app",
    siteName: "Portfolio Mandrindra Espérant",
    images: [
      {
        url: "/homme.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Mandrindra Espérant",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandrindra Espérant | Développeur Full Stack",
    description:
      "Portfolio moderne et professionnel de Mandrindra Espérant. Découvrez ses projets, compétences et réalisations.",
    images: ["/homme1.png"],
  },
  metadataBase: new URL("https://esperant-porfolio.vercel.app"),
  alternates: {
    canonical: "https://esperant-porfolio.vercel.app",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
