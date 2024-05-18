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

import { FieldDescription } from "@/components/form/field-description";
import { FormField } from "@/components/form/form-field";
import { Button } from "@/components/ui/button";
import { owners } from "@/types";
import { cn } from "@/lib/utils";

interface AddDeviceFormAdminProps {
  owners: owners;
}

export const AddDeviceFormAdmin = ({ owners }: AddDeviceFormAdminProps) => {
  const [state, action] = useFormState(addDeviceAdmin, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className={cn("relative flex flex-col gap-5")}>
      <FormField>
        <Owner owners={owners} />
        {state?.errors?.owner && (
          <FieldDescription>{state.errors.owner}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <DeviceName />
        {state?.errors?.deviceName && (
          <FieldDescription>{state.errors.deviceName}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Address />
        {state?.errors?.streetAddress && (
          <FieldDescription>{state.errors.streetAddress}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <City />
        {state?.errors?.city && (
          <FieldDescription>{state.errors.city}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Country />
        {state?.errors?.country && (
          <FieldDescription>{state.errors.country}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Model />
        {state?.errors?.model && (
          <FieldDescription>{state.errors.model}</FieldDescription>
        )}
      </FormField>
      <SIM />
      {state?.errors?.SIM && (
        <FieldDescription className="-mt-2">
          {state.errors.SIM}
        </FieldDescription>
      )}
      <Button type="submit" disabled={pending} aria-disabled={pending}>
        {pending ? "Submitting..." : "Add device"}
      </Button>
    </form>
  );
};
