"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { update } from "@/lib/data/update";
import { AssignDeviceSchema, FormState } from "@/lib/schemas/assign-device";

import { Devices } from "@/components/form/device/device";
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

import { cn } from "@/lib/utils";
import { Device } from "@prisma/client";
import { setOpen } from "@/types";

export function AssignDevice({
  userId,
  devices,
  setOpen,
}: {
  devices: Device[];
  userId: number;
  setOpen: setOpen;
}) {
  const router = useRouter();

  async function onSubmit(state: FormState, formData: FormData) {
    const validatedFields = AssignDeviceSchema.safeParse({
      deviceId: formData.get("deviceId"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const userId = Number(formData.get("userId"));
    const deviceId = Number(formData.get("deviceId"));

    update(deviceId, "device", "owner", userId).then(() => {
      setTimeout(() => {
        setOpen(false);
        toast.success("Device assigned successfully!");
      }, 500);
      router.refresh();
    });
  }
  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();

  return (
    <>
      <div className="xs:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={cn(
                "w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                "transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none",
                "data-[disabled]:opacity-50 hover:bg-accent"
              )}
            >
              Assign device
            </button>
          </SheetTrigger>
          <SheetContent side="bottom">
              <SheetHeader className="text-left mb-6">
                <SheetTitle>Assign device</SheetTitle>
              </SheetHeader>
            <form action={action}>
              <input type="hidden" name="userId" defaultValue={userId} />
              <Devices devices={devices}>
                {state?.errors?.deviceId && <>{state.errors.deviceId}</>}
              </Devices>
              <div className="flex flex-col mt-6">
              <SheetClose asChild>
                <Button variant="ghost">Cancel</Button>
              </SheetClose>
              <Button disabled={pending} aria-disabled={pending} type="submit">
                {pending ? "Submitting" : "Assign device"}
              </Button>
              </div>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden xs:block">
        <Dialog>
          <DialogTrigger asChild>
            <button
              className={cn(
                "w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                "transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none",
                "data-[disabled]:opacity-50 hover:bg-accent"
              )}
            >
              Assign device
            </button>
          </DialogTrigger>
          <DialogContent title="Assign device">
            <form action={action}>
              <input type="hidden" name="userId" defaultValue={userId} />
              <Devices devices={devices}>
                {state?.errors?.deviceId && <>{state.errors.deviceId}</>}
              </Devices>
              <DialogFooter className="flex justify-end gap-2 mt-6">
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button
                  disabled={pending}
                  aria-disabled={pending}
                  type="submit"
                >
                  {pending ? "Submitting" : "Assign device"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
