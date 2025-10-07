import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard - ApartmentHub",
  description: "Quản lý chung cư",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
