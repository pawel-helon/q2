"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { changeRoles } from "@/app/api/neon/change-role";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChangeRoleProps {
  ids: any[];
}

export const ChangeRole = ({ ids }: ChangeRoleProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(false);
    setTimeout(() => {
      toast.success("Role(s) updated");
      router.refresh();
    }, 500);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="ghost">Change role</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-6">
          <DialogTitle>Change role</DialogTitle>
        </DialogHeader>
        <form action={changeRoles}>
          <input type="hidden" name="ids" value={ids} />
          <div className="flex flex-col gap-2">
          <Label>Select role</Label>
          <Select defaultValue="ENDUSER" name="role">
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="ADMIN">Admin</SelectItem>
                <SelectItem value="OWNER">Owner</SelectItem>
                <SelectItem value="ENDUSER">End user</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
          <div className="w-full flex justify-end gap-2 mt-10">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              onClick={handleClick}
            >
              Change role
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
