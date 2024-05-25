"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { readUserByEmail } from "@/lib/data/read";
import { update } from "@/lib/data/update";

import { Owners } from "@/components/form/device/owner";
import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { email, setOpen } from "@/types";

export function AssignOwner({
  users,
  deviceId,
  ownerEmail,
  setOpen,
}: {
  users: email[];
  deviceId: number;
  ownerEmail: string;
  setOpen: setOpen;
}) {
  const router = useRouter();

  async function onSubmit(formData: FormData) {
    const deviceId = Number(formData.get("deviceId"));
    const ownerEmail = formData.get("owner") as string;

    readUserByEmail(ownerEmail, "id").then((userId) => {
      update(deviceId, "device", "owner", userId).then(() => {
        setTimeout(() => {
          setOpen(false);
          toast.success("Device reassigned successfully!");
        }, 500);
        router.refresh();
      });
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent">
          Assign owner
        </button>
      </DialogTrigger>
      <DialogContent title="Assign owner">
        <form action={onSubmit}>
          <input type="hidden" name="deviceId" value={deviceId} />
          <Owners users={users} defaultValue={ownerEmail} />
          <DialogFooter className="flex justify-end gap-1 mt-6">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button>Assign</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
