import { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Template",
  description:
    "A starter template repository with next.js using app router, pre-configured with typescript, tailwind css and shadcn/ui.",
};

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
  );
}
