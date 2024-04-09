import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ChevronButtonProps {
    collapsed: boolean;
    handleCollapse: () => void;
}

export const ChevronButton = ({ collapsed, handleCollapse }: ChevronButtonProps) => {
  return (
    <div
    className={cn(
      "flex mt-[6px] p-2",
      collapsed ? "justify-center" : "justify-end"
    )}
  >
    <Button variant="ghost" size="icon" onClick={handleCollapse}>
      {collapsed ? <ChevronRight /> : <ChevronLeft />}
    </Button>
  </div>
  )
}
