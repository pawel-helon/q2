"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import { updateDeviceDetails } from "@/lib/data/update";

import {
  AddDeviceSchemaAdmin,
  FormState,
} from "@/lib/schemas/add-device-schema";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Owners } from "@/components/form/device/owner";
import { DeviceName } from "@/components/form/device/name";
import { Address } from "@/components/form/device/address";
import { City } from "@/components/form/device/city";
import { Country } from "@/components/form/device/country";
import { Model } from "@/components/form/device/model";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { email } from "@/types";
import { Device } from "@prisma/client";

export function Edit({
  device,
  ownerEmail,
  users,
}: {
  device: Device;
  ownerEmail: string;
  users: email[];
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const router = useRouter();

  function onSubmit(state: FormState, formData: FormData) {
    const validatedFields = AddDeviceSchemaAdmin.safeParse({
      owner: formData.get("owner"),
      city: formData.get("city"),
      country: formData.get("country"),
      model: formData.get("model"),
      deviceName: formData.get("deviceName"),
      streetAddress: formData.get("streetAddress"),
      SIM: formData.get("SIM"),
    });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    const { owner, city, country, model, deviceName, streetAddress, SIM } =
      validatedFields.data;
    const deviceId = Number(formData.get("deviceId"));

    updateDeviceDetails(
      deviceId,
      owner,
      city,
      country,
      model,
      deviceName,
      streetAddress,
      SIM
    ).then(() => {
      setTimeout(() => {
        setOpenDialog(false);
        setOpenSheet(false);
        toast.success("Details have been updated.");
      }, 500);
      router.refresh();
    });
  }

  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();

  return (
    <>
      <div className="xs:hidden">
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetTrigger asChild>
            <Button variant="secondary" size="sm">
              Edit
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader className="text-left mb-6">
              <SheetTitle>Edit details</SheetTitle>
            </SheetHeader>
            <form action={action} className="relative flex flex-col gap-6">
              <input hidden name="deviceId" defaultValue={device.id} />
              <Owners users={users} defaultValue={ownerEmail}>
                {state?.errors?.owner && <>{state.errors.owner}</>}
              </Owners>
              <DeviceName defaultValue={device.deviceName}>
                {state?.errors?.deviceName && <>{state.errors.deviceName}</>}
              </DeviceName>
              <Address defaultValue={device.streetAddress}>
                {state?.errors?.streetAddress && (
                  <>{state.errors.streetAddress}</>
                )}
              </Address>
              <City defaultValue={device.city}>
                {state?.errors?.city && <>{state.errors.city}</>}
              </City>
              <Country defaultValue={device.country}>
                {state?.errors?.country && <>{state.errors.country}</>}
              </Country>
              <Model defaultValue={device.model}>
                {state?.errors?.model && <>{state.errors.model}</>}
              </Model>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <Label htmlFor="SIM">Phone number</Label>
                  <p className="text-[0.8rem] leading-none text-muted-foreground">
                    {state?.errors?.SIM && <>{state.errors.SIM}</>}
                  </p>
                </div>
                <Input
                  id="SIM"
                  name="SIM"
                  defaultValue={device.SIM}
                  spellCheck="false"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button
                  type="submit"
                  disabled={pending}
                  aria-disabled={pending}
                >
                  {pending ? "Submitting..." : "Save changes"}
                </Button>
              </div>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden xs:block">
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button variant="secondary" size="sm">
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="mb-6">
              <DialogTitle>Edit details</DialogTitle>
            </DialogHeader>
            <form action={action} className="relative flex flex-col gap-8">
              <input hidden name="deviceId" defaultValue={device.id} />
              <Owners users={users} defaultValue={ownerEmail}>
                {state?.errors?.owner && <>{state.errors.owner}</>}
              </Owners>
              <DeviceName defaultValue={device.deviceName}>
                {state?.errors?.deviceName && <>{state.errors.deviceName}</>}
              </DeviceName>
              <Address defaultValue={device.streetAddress}>
                {state?.errors?.streetAddress && (
                  <>{state.errors.streetAddress}</>
                )}
              </Address>
              <City defaultValue={device.city}>
                {state?.errors?.city && <>{state.errors.city}</>}
              </City>
              <Country defaultValue={device.country}>
                {state?.errors?.country && <>{state.errors.country}</>}
              </Country>
              <Model defaultValue={device.model}>
                {state?.errors?.model && <>{state.errors.model}</>}
              </Model>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <Label htmlFor="SIM">Phone number</Label>
                  <p className="text-[0.8rem] leading-none text-muted-foreground">
                    {state?.errors?.SIM && <>{state.errors.SIM}</>}
                  </p>
                </div>
                <Input
                  id="SIM"
                  name="SIM"
                  defaultValue={device.SIM}
                  spellCheck="false"
                />
              </div>
              <div className="flex gap-2 w-full justify-end">
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button
                  type="submit"
                  disabled={pending}
                  aria-disabled={pending}
                >
                  {pending ? "Submitting..." : "Save changes"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
