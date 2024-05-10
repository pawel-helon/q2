"use client";

import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SplitButtonProps {
  primaryActionLabel: string;
  secondaryActionLabel: string;
}

export function SplitButton({
  primaryActionLabel,
  secondaryActionLabel,
}: SplitButtonProps) {
  const primaryAction = () => {
    console.log("Primary action");
  };
  const secondaryAction = () => {
    console.log("Secondary action");
  };
  return (
    <div className="flex">
      <Button onClick={primaryAction} className="rounded-r-none border-r w-[80px]">
        {primaryActionLabel}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="rounded-l-none">
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Button
              onClick={secondaryAction}
              variant="ghost"
              className="w-full justify-start"
            >
              {secondaryActionLabel}
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
