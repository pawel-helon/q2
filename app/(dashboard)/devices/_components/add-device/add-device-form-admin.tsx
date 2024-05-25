"use client";

import { useFormState, useFormStatus } from "react-dom";

import { addDeviceAdmin } from "@/app/actions/devices/add-device-admin";

import { Owner } from "@/components/form/device/owner";
import { DeviceName } from "@/components/form/device/name";
import { Address } from "@/components/form/device/address";
import { City } from "@/components/form/device/city";
import { Country } from "@/components/form/device/country";
import { Model } from "@/components/form/device/model";
import { SIM } from "@/components/form/device/SIM";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { User } from "@prisma/client";

export function AddDeviceFormAdmin({ owners }: { owners: User[] }) {
  const [state, action] = useFormState(addDeviceAdmin, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="relative flex flex-col gap-8">
      <Owner owners={owners}>
        {state?.errors?.owner && <>{state.errors.owner}</>}
      </Owner>
      <DeviceName>
        {state?.errors?.deviceName && <>{state.errors.deviceName}</>}
      </DeviceName>
      <Address>
        {state?.errors?.streetAddress && <>{state.errors.streetAddress}</>}
      </Address>
      <City>{state?.errors?.city && <>{state.errors.city}</>}</City>
      <Country>{state?.errors?.country && <>{state.errors.country}</>}</Country>
      <Model>{state?.errors?.model && <>{state.errors.model}</>}</Model>
      <SIM>{state?.errors?.SIM && <>{state.errors.SIM}</>}</SIM>
      <div className="flex gap-2 w-full justify-end">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button type="submit" disabled={pending} aria-disabled={pending}>
          {pending ? "Submitting..." : "Add device"}
        </Button>
      </div>
    </form>
  );
}
