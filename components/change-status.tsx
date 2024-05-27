"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { updateStatus } from "@/lib/data/update";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { STATUS } from "@prisma/client";

export function ChangeStatus({ ids }: { ids: any[] }) {
  const [visibility, setVisibilty] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="ghost"
          onMouseEnter={() => setVisibilty(true)}
          onMouseLeave={() => setVisibilty(false)}
          className="flex items-center w-[132px] justify-start pr-0"
        >
          Change status
          {visibility && <ChevronDown className="ml-1" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="min-w-[1rem] w-[124px] bg-background shadow-black shadow-lg"
      >
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start"
          onClick={() => {
            updateStatus(ids, STATUS.ACTIVE);
            setTimeout(() => {
              setOpen(false);
              toast.success("Status has been changed to: Active");
            }, 500);
            router.refresh();
          }}
        >
          Active
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start"
          onClick={() => {
            updateStatus(ids, STATUS.INACTIVE);
            setTimeout(() => {
              setOpen(false);
              toast.success("Status has been changed to: Inactive");
            }, 500);
            router.refresh();
          }}
        >
          Inactive
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
