"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { readUserByEmail } from "@/lib/data/read";
import { updateUsersWithAccess } from "@/lib/data/update";

import { Users } from "@/components/form/device/owner";
import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  } from "@/components/ui/sheet";
  import { Button } from "@/components/ui/button";
  
import { email, setOpen } from "@/types";

export function GiveAccess({
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
    <>
      <div className="xs:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent">
              Give access
            </button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader className="text-left mb-6">
              <SheetTitle>
                Give access
              </SheetTitle>
            </SheetHeader>
              <form action={onSubmit}>
                <input type="hidden" name="deviceId" value={deviceId} />
                <Users users={users} side="top"/>
                <div className="flex flex-col xs:flex-row justify-end gap-2 mt-6">
                  <SheetClose asChild>
                    <Button variant="ghost">Cancel</Button>
                  </SheetClose>
                  <Button>Give access</Button>
                </div>
              </form>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden xs:block">
        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent">
              Give access
            </button>
          </DialogTrigger>
          <DialogContent title="Give access">
            <form action={onSubmit}>
              <input type="hidden" name="deviceId" value={deviceId} />
              <Users users={users} />
              <DialogFooter className="flex justify-end gap-1 mt-6">
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button>Give access</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
