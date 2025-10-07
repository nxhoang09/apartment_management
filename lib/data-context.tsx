"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface Declaration {
  id: string
  residentId: string
  residentName: string
  apartment: string
  type: "temporary_residence" | "temporary_absence"
  startDate: string
  endDate: string
  reason: string
  personName?: string
  personIdCard?: string
  personPhone?: string
  relationship?: string
  status: "pending" | "approved" | "rejected"
  submittedDate: string
  reviewedDate?: string
  rejectionReason?: string
}

interface Announcement {
  id: string
  title: string
  content: string
  priority: "low" | "medium" | "high"
  createdBy: string
  createdDate: string
  targetAudience: "all" | "residents" | "owners"
}

interface DataContextType {
  declarations: Declaration[]
  announcements: Announcement[]
  addDeclaration: (declaration: Omit<Declaration, "id" | "submittedDate" | "status">) => void
  updateDeclarationStatus: (id: string, status: "approved" | "rejected", rejectionReason?: string) => void
  addAnnouncement: (announcement: Omit<Announcement, "id" | "createdDate">) => void
  deleteAnnouncement: (id: string) => void
}

const DataContext = createContext<DataContextType | null>(null)

// Initial mock data
const INITIAL_DECLARATIONS: Declaration[] = [
  {
    id: "1",
    residentId: "2",
    residentName: "Nguyễn Văn A",
    apartment: "A-101",
    type: "temporary_residence",
    startDate: "2025-01-10",
    endDate: "2025-02-10",
    reason: "Khách đến thăm",
    personName: "Trần Văn B",
    personIdCard: "001234567890",
    personPhone: "0912345678",
    relationship: "Bạn bè",
    status: "pending",
    submittedDate: "2025-01-05",
  },
  {
    id: "2",
    residentId: "3",
    residentName: "Trần Thị B",
    apartment: "A-102",
    type: "temporary_absence",
    startDate: "2025-01-15",
    endDate: "2025-02-15",
    reason: "Công tác xa",
    status: "approved",
    submittedDate: "2025-01-04",
    reviewedDate: "2025-01-05",
  },
]

const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "1",
    title: "Thông báo bảo trì hệ thống điện",
    content: "Chung cư sẽ tiến hành bảo trì hệ thống điện vào ngày 15/01/2025 từ 8h-12h. Vui lòng chuẩn bị trước.",
    priority: "high",
    createdBy: "Ban quản lý",
    createdDate: "2025-01-03",
    targetAudience: "all",
  },
  {
    id: "2",
    title: "Lịch vệ sinh bể nước",
    content: "Bể nước sẽ được vệ sinh định kỳ vào ngày 20/01/2025. Có thể ảnh hưởng đến nguồn nước.",
    priority: "medium",
    createdBy: "Ban quản lý",
    createdDate: "2025-01-02",
    targetAudience: "all",
  },
]

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [declarations, setDeclarations] = useState<Declaration[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  // Load data from localStorage on mount
  useEffect(() => {
    const storedDeclarations = localStorage.getItem("declarations")
    const storedAnnouncements = localStorage.getItem("announcements")

    if (storedDeclarations) {
      setDeclarations(JSON.parse(storedDeclarations))
    } else {
      setDeclarations(INITIAL_DECLARATIONS)
      localStorage.setItem("declarations", JSON.stringify(INITIAL_DECLARATIONS))
    }

    if (storedAnnouncements) {
      setAnnouncements(JSON.parse(storedAnnouncements))
    } else {
      setAnnouncements(INITIAL_ANNOUNCEMENTS)
      localStorage.setItem("announcements", JSON.stringify(INITIAL_ANNOUNCEMENTS))
    }
  }, [])

  const addDeclaration = (declaration: Omit<Declaration, "id" | "submittedDate" | "status">) => {
    const newDeclaration: Declaration = {
      ...declaration,
      id: Date.now().toString(),
      submittedDate: new Date().toISOString().split("T")[0],
      status: "pending",
    }

    const updated = [...declarations, newDeclaration]
    setDeclarations(updated)
    localStorage.setItem("declarations", JSON.stringify(updated))
  }

  const updateDeclarationStatus = (id: string, status: "approved" | "rejected", rejectionReason?: string) => {
    const updated = declarations.map((d) =>
      d.id === id
        ? {
            ...d,
            status,
            reviewedDate: new Date().toISOString().split("T")[0],
            rejectionReason,
          }
        : d,
    )
    setDeclarations(updated)
    localStorage.setItem("declarations", JSON.stringify(updated))
  }

  const addAnnouncement = (announcement: Omit<Announcement, "id" | "createdDate">) => {
    const newAnnouncement: Announcement = {
      ...announcement,
      id: Date.now().toString(),
      createdDate: new Date().toISOString().split("T")[0],
    }

    const updated = [newAnnouncement, ...announcements]
    setAnnouncements(updated)
    localStorage.setItem("announcements", JSON.stringify(updated))
  }

  const deleteAnnouncement = (id: string) => {
    const updated = announcements.filter((a) => a.id !== id)
    setAnnouncements(updated)
    localStorage.setItem("announcements", JSON.stringify(updated))
  }

  return (
    <DataContext.Provider
      value={{
        declarations,
        announcements,
        addDeclaration,
        updateDeclarationStatus,
        addAnnouncement,
        deleteAnnouncement,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useData must be used within DataProvider")
  }
  return context
}
