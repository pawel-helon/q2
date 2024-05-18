"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
import { requestRoleChangeEndUser } from "@/app/actions/auth/request-role-change-end-user";
import { Role } from "@/components/form/user/role";

interface ChangeRoleForm {
  userId: number;
  setOpen: (open: boolean) => void;
}

export const ChangeRoleForm = ({ userId, setOpen }: ChangeRoleForm) => {
  const router = useRouter();
  const handleClick = () => {
    setOpen(false);
    setTimeout(() => {
      toast.success("Request has been submitted.");
      router.refresh();
    }, 500);
  };

  return (
    <form action={requestRoleChangeEndUser}>
      <input type="hidden" name="id" value={userId} />
      <div className="flex flex-col gap-2">
        <Role />
      </div>
      <div className="w-full flex justify-end gap-2 mt-10">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button type="submit" onClick={handleClick}>
          Submit
        </Button>
      </div>
    </form>
  );
};
