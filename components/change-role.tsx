"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { updateRole } from "@/lib/data/update";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ROLE } from "@prisma/client";

export function ChangeRole({ ids }: { ids: any[] }) {
  const [visibility, setVisibilty] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const idsArray = ids!
    .toString()
    .split(",")
    .map((string) => parseInt(string));

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="ghost"
          onMouseEnter={() => setVisibilty(true)}
          onMouseLeave={() => setVisibilty(false)}
          className="flex items-center w-[116px] justify-start pr-0"
        >
          Change role
          {visibility && <ChevronDown className="ml-1" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="min-w-[1rem] w-[116px] bg-background shadow-black shadow-lg"
      >
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start"
          onClick={() => {
            updateRole(idsArray, ROLE.ADMIN).then(() => {
              setTimeout(() => {
                setOpen(false);
                toast.success("Role has been changed to: Admin");
              }, 500);
              router.refresh();
            });
          }}
        >
          Admin
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start"
          onClick={() => {
            updateRole(idsArray, ROLE.OWNER).then(() => {
              setTimeout(() => {
                setOpen(false);
                toast.success("Role has been changed to: Owner");
              }, 500);
              router.refresh();
            });
          }}
        >
          Owner
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start"
          onClick={() => {
            updateRole(idsArray, ROLE.ENDUSER).then(() => {
              setTimeout(() => {
                setOpen(false);
                toast.success("Role has been changed to: End user");
              }, 500);
              router.refresh();
            });
          }}
        >
          End user
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
