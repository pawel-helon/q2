import { Toaster } from "sonner"

import { Assistant } from "../_components/assistant"
import { Sidebar } from "../_components/sidebar"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div
    className={cn(
      "relative min-h-screen flex mx-auto xl:max-w-[1280px] 2xl:max-w-[1536px]",
      "scrollbar scrollbar-thumb-muted scrollbar-track-background h-32 overflow-y-scroll"
    )}
  >
    <Sidebar />
    <div className="flex flex-col w-full px-6 border-r-[1px] border-border">
      {children}
    </div>
    <Assistant />
    <Toaster position="top-center" />
  </div>
  )
}

export default DashboardLayout