"use client";

import { Owners, Users } from "@/components/form/device/owner";
import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { email, setOpen } from "@/types";
import { readUserByEmail } from "@/lib/data/read";
import { update, updateUsersWithAccess } from "@/lib/data/update";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function AddUser({
  deviceId,
  users,
  setOpen,
}: {
  deviceId: number;
  users: email[];
  setOpen: setOpen;
}) {
  const router = useRouter();

  function onSubmit(formData: FormData) {
    const deviceId = Number(formData.get("deviceId"));
    const userEmail = formData.get("user") as string;

    readUserByEmail(userEmail).then((userId) => {
      updateUsersWithAccess(deviceId, userId).then(() => {
        setTimeout(() => {
          setOpen(false);
          toast.success("User added successfully!");
        }, 500);
        router.refresh();
      });
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent">
          Add user
        </button>
      </DialogTrigger>
      <DialogContent title="Add user">
        <form action={onSubmit}>
          <input type="hidden" name="deviceId" value={deviceId} />
          <Users users={users} />
          <DialogFooter className="flex justify-end gap-1 mt-6">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button>Add user</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
