"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { device, owners } from "@/types";
import { Owner } from "@/components/form/device/owner";
import { DeviceName } from "@/components/form/device/name";
import { Address } from "@/components/form/device/address";
import { City } from "@/components/form/device/city";
import { Country } from "@/components/form/device/country";
import { Model } from "@/components/form/device/model";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AddDeviceSchemaAdmin,
  FormState,
} from "@/lib/schemas/add-device-schema";
import { editDeviceDetails } from "@/app/actions/devices/edit-device-details";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Edit({
  device,
  ownerEmail,
  owners,
}: {
  device: device | null;
  ownerEmail: string;
  owners: owners;
}) {
  const [open, setOpen] = useState(false);
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

    editDeviceDetails(
      deviceId,
      owner,
      city,
      country,
      model,
      deviceName,
      streetAddress,
      SIM
    );
    setTimeout(() => {
      toast.success("Details have been updated.");
      setOpen(false);
      router.refresh();
    }, 500);
  }

  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-6">
          <DialogTitle>Edit details</DialogTitle>
        </DialogHeader>
        <form action={action} className="relative flex flex-col gap-8">
          <input hidden name="deviceId" value={device?.id} />
          <Owner owners={owners} defaultValue={ownerEmail}>
            {state?.errors?.owner && <>{state.errors.owner}</>}
          </Owner>
          <DeviceName defaultValue={device?.deviceName}>
            {state?.errors?.deviceName && <>{state.errors.deviceName}</>}
          </DeviceName>
          <Address defaultValue={device?.streetAddress}>
            {state?.errors?.streetAddress && <>{state.errors.streetAddress}</>}
          </Address>
          <City defaultValue={device?.city}>
            {state?.errors?.city && <>{state.errors.city}</>}
          </City>
          <Country defaultValue={device?.country}>
            {state?.errors?.country && <>{state.errors.country}</>}
          </Country>
          <Model defaultValue={device?.model}>
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
              defaultValue={device?.SIM}
              spellCheck="false"
            />
          </div>
          <Button type="submit" disabled={pending} aria-disabled={pending}>
            {pending ? "Submitting..." : "Save changes"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
