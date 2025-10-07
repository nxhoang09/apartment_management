import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resident Portal - ApartmentHub",
  description: "Cổng thông tin cư dân",
}

export default function ResidentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
