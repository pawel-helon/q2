"use client";

import { useFormState, useFormStatus } from "react-dom";
import { $Enums } from "@prisma/client";

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
import { addDeviceAdmin } from "@/app/actions/devices/add-device-admin";

interface AddDeviceFormAdminProps {
  owners: {
    id: number;
    email: string;
    name: string | null;
    password: string;
    role: $Enums.ROLE;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export const AddDeviceFormAdmin = ({ owners }: AddDeviceFormAdminProps) => {
  const [state, action] = useFormState(addDeviceAdmin, undefined);
  const { pending } = useFormStatus();
  
  return (
    <form action={action} className="flex flex-col gap-5">
      <FormField>
        <Label htmlFor="owner">Owner</Label>
        <Select name="owner">
          <SelectTrigger>
            <SelectValue placeholder="Select owner" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {owners.map((owner) => {
                return (
                  <SelectItem key={owner.id} value={owner.email}>
                    {owner.email}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormField>
      <FormField>
        <Label htmlFor="deviceName">Device name</Label>
        <Input
          id="deviceName"
          name="deviceName"
          placeholder="Enter device name"
          spellCheck="false"
        />
      </FormField>
      {state?.errors?.deviceName && (
        <FieldDescription>{state.errors.deviceName}</FieldDescription>
      )}
      <FormField>
        <Label htmlFor="streetAddress">Street address</Label>
        <Input
          id="streetAddress"
          name="streetAddress"
          placeholder="Enter street address"
          spellCheck="false"
        />
      </FormField>
      {state?.errors?.streetAddress && (
        <FieldDescription>{state.errors.streetAddress}</FieldDescription>
      )}
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
      </FormField>
      <FormField>
        <Label htmlFor="SIM">SIM</Label>
        <Input id="SIM" name="SIM" placeholder="Enter SIM" spellCheck="false" />
      </FormField>
      {state?.errors?.SIM && (
        <FieldDescription>{state.errors.SIM}</FieldDescription>
      )}
      <Button type="submit" disabled={pending} aria-disabled={pending}>
        Add device
      </Button>
    </form>
  );
};
