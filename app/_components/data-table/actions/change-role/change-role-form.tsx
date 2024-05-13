"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { changeRoles } from "@/app/api/neon/change-role";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  DialogClose,
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
  setOpen: (open: boolean) => void;
}

export const ChangeRoleForm = ({ ids, setOpen }: ChangeRoleProps) => {
  const router = useRouter();

  const handleClick = () => {
    setOpen(false);
    setTimeout(() => {
      toast.success("Role(s) updated");
      router.refresh();
    }, 500);
  };

  return (
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
        <Button type="submit" onClick={handleClick}>
          Change role
        </Button>
      </div>
    </form>
  );
};
