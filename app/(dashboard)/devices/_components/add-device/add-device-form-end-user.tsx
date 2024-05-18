"use client";

import { useFormState, useFormStatus } from "react-dom";

import { addDeviceEndUser } from "@/app/actions/devices/add-device-end-user";
import { FieldDescription } from "@/components/form/field-description";
import { FormField } from "@/components/form/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SIM } from "@/components/form/device/SIM";
import { DeviceName } from "@/components/form/device/name";
import { Address } from "@/components/form/device/address";
import { City } from "@/components/form/device/city";
import { Country } from "@/components/form/device/country";
import { Model } from "@/components/form/device/model";

interface AddDeviceFormEndUserProps {
  userId: number;
}

export const AddDeviceFormEndUser = ({ userId }: AddDeviceFormEndUserProps) => {
  const [state, action] = useFormState(addDeviceEndUser, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <input type="hidden" name="userId" value={userId} />
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
