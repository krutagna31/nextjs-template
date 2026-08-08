"use client"

import Link from "next/link"
import { ViewContainer } from "@/components/layouts"
import { ModeToggle } from "@/components/mode-toggle"

function SiteHeader() {
  return (
    <header className="py-3">
      <ViewContainer className="flex items-center justify-between">
        <Link href="#">Next.js Template</Link>
        <ModeToggle />
      </ViewContainer>
    </header>
  )
}

export { SiteHeader }
