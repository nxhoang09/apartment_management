import { LoadingSpinner } from "@/components/loading-spinner"

export default function ResidentLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-sm text-muted-foreground">Đang tải thông tin...</p>
      </div>
    </div>
  )
}
