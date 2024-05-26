"use client";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function SplitButton({
  primaryAction,
  primaryActionLabel,
  secondaryAction,
  secondaryActionLabel,
}: {
  primaryAction: () => void;
  primaryActionLabel: string;
  secondaryAction: () => void;
  secondaryActionLabel: string;
}) {
  return (
    <div className="flex w-[98px]">
      <Button
        onClick={primaryAction}
        size="sm"
        className="rounded-r-none border-r grow"
      >
        {primaryActionLabel}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" className="rounded-l-none w-8 px-0">
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[1rem] w-[98px] p-0">
          <DropdownMenuItem
            onSelect={secondaryAction}
            className="text-xs px-3 py-2"
          >
            {secondaryActionLabel}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
