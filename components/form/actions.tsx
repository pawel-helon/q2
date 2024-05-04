"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ActionsProps {
  children: React.ReactNode;
}

export function Actions({ children }: ActionsProps) {
  return (
    <div className="flex gap-2 w-full justify-end">
      <DialogClose
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none",
          "focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          "hover:bg-accent hover:text-accent-foreground",
          "h-9 px-4 py-2"
        )}
      >
        Cancel
      </DialogClose>
      {children}
    </div>
  );
}
