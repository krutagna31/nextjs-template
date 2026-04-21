import { Josefin_Sans } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib"
import { ThemeProvider } from "@/providers"
import "./globals.css"

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
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
      className={cn("antialiased", josefinSans.className)}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
