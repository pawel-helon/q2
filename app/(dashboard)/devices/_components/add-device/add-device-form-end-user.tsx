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
import { PhoneNumberField } from "@/components/form/phone-number-field";

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
        <Label htmlFor="deviceName">Device name</Label>
        <Input
          id="deviceName"
          name="deviceName"
          placeholder="Enter device name"
          spellCheck="false"
        />
        {state?.errors?.deviceName && (
          <FieldDescription>{state.errors.deviceName}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="streetAddress">Street address</Label>
        <Input
          id="streetAddress"
          name="streetAddress"
          placeholder="Enter street address"
          spellCheck="false"
        />
        {state?.errors?.streetAddress && (
          <FieldDescription>{state.errors.streetAddress}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="city">City</Label>
        <Select name="city">
          <SelectTrigger>
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Austin">Austin</SelectItem>
              <SelectItem value="Dallas">Dallas</SelectItem>
              <SelectItem value="Boston">Boston</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {state?.errors?.city && (
          <FieldDescription>{state.errors.city}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="country">Country</Label>
        <Select name="country" defaultValue="USA">
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="USA">USA</SelectItem>
              <SelectItem value="France">France</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {state?.errors?.country && (
          <FieldDescription>{state.errors.country}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="model">Model</Label>
        <Select name="model">
          <SelectTrigger>
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="MP-28">MP-28</SelectItem>
              <SelectItem value="NX-356">NX-356</SelectItem>
              <SelectItem value="MZ-12">MZ-12</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {state?.errors?.model && (
          <FieldDescription>{state.errors.model}</FieldDescription>
        )}
      </FormField>
      <PhoneNumberField />
      {state?.errors?.SIM && (
        <FieldDescription className="-mt-2">
          {state.errors.SIM}
        </FieldDescription>
      )}
      <Button type="submit" disabled={pending} aria-disabled={pending}>
        Add device
      </Button>
    </form>
  );
};
