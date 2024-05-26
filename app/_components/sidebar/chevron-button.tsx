import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ChevronButton({
  collapsed,
  handleCollapse,
}: {
  collapsed: boolean;
  handleCollapse: () => void;
}) {
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
  );
}
