"use client";

import { useFormState, useFormStatus } from "react-dom";

import { addDeviceEndUser } from "@/app/actions/devices/add-device-end-user";

import { DeviceName } from "@/components/form/device/name";
import { Address } from "@/components/form/device/address";
import { City } from "@/components/form/device/city";
import { Country } from "@/components/form/device/country";
import { Model } from "@/components/form/device/model";
import { SIM } from "@/components/form/device/SIM";

import { Button } from "@/components/ui/button";

export function AddDeviceFormEndUser({ userId }: { userId: number }) {
  const [state, action] = useFormState(addDeviceEndUser, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-8">
      <input type="hidden" name="userId" value={userId} />
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
      <Button type="submit" disabled={pending} aria-disabled={pending}>
        {pending ? "Submitting..." : "Add device"}
      </Button>
    </form>
  );
}
