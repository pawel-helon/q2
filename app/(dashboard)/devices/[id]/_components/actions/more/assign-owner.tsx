"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { update } from "@/lib/data/update";
import { readUserByEmail } from "@/lib/data/read";

import { Sheet } from "@/components/dial-sheet/sheet";
import { SheetClose } from "@/components/ui/sheet";
import { Dialog } from "@/components/dial-sheet/dialog";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Trigger } from "@/components/dial-sheet/trigger";
import { Button } from "@/components/ui/button";
import { Owners } from "@/components/form/device/owner";

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

    readUserByEmail(ownerEmail).then((userId) => {
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
    <>
      <Sheet
        title="Assign owner"
        trigger={<Trigger title="Assign owner" variant="menuItem" />}
        side="bottom"
      >
        <form action={onSubmit}>
          <input type="hidden" name="deviceId" value={deviceId} />
          <Owners users={users} defaultValue={ownerEmail} side="top" />
          <div className="flex flex-col mt-6">
            <SheetClose asChild>
              <Button variant="ghost">Cancel</Button>
            </SheetClose>
            <Button type="submit">Assign owner</Button>
          </div>
        </form>
      </Sheet>
      <Dialog
        title="Assign owner"
        trigger={<Trigger title="Assign owner" variant="menuItem" />}
      >
        <form action={onSubmit} className="-mt-6">
          <input type="hidden" name="deviceId" value={deviceId} />
          <Owners users={users} defaultValue={ownerEmail} side="top" />
          <DialogFooter className="flex justify-end gap-2 mt-12">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit">Assign owner</Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
