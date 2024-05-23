"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { assignDevice } from "@/app/actions/devices/assign-device";
import { AssignDeviceSchema, FormState } from "@/lib/schemas/assign-device";

import { OwnerEmail } from "@/components/form/device/owner";
import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { emails, setOpen } from "@/types";
import { cn } from "@/lib/utils";
import { assignOwner } from "@/app/actions/devices/assign-owner";
import { fetchOwnerByEmail } from "@/app/api/neon/fetch-owner";

export function AssignOwner({
  users,
  deviceId,
  ownerEmail,
  setOpen,
}: {
  users: emails;
  deviceId: number;
  ownerEmail: string;
  setOpen: setOpen;
}) {
  const router = useRouter();

  async function onSubmit(formData: FormData) {
    const deviceId = Number(formData.get("deviceId"));
    const ownerEmail = formData.get("ownerEmail") as string;

    fetchOwnerByEmail(ownerEmail)
      .then((userId) => {
        assignOwner(deviceId, userId)
          .then(() => {
            setTimeout(() => {
              setOpen(false);
              toast.success("Device reassigned successfully!");
              router.refresh();
            }, 500);
          })
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            "w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
            "transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none",
            "data-[disabled]:opacity-50 hover:bg-accent"
          )}
        >
          Assign owner
        </button>
      </DialogTrigger>
      <DialogContent title="Assign owner">
        <form action={onSubmit}>
          <input type="hidden" name="deviceId" value={deviceId} />
          <OwnerEmail users={users} defaultValue={ownerEmail} />
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
