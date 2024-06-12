"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { email } from "@/types";
import { User } from "@prisma/client";

export function Owners({
  users,
  children,
  defaultValue,
  side,
}: {
  users: email[];
  children?: React.ReactNode;
  defaultValue?: string;
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="owner">Owner</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="owner" defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder={defaultValue} />
        </SelectTrigger>
        <SelectContent className="h-min" side={side}>
          <SelectGroup>
            {users.map((user) => {
              return (
                <SelectItem key={user.email} value={user.email}>
                  {user.email}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
// TODO: replace Owner with Owners
export function Owner({
  owners,
  children,
  defaultValue,
}: {
  owners: User[];
  children?: React.ReactNode;
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="owner">Owner</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="owner" defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select owner" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {owners.map((owner) => {
              return (
                <SelectItem key={owner.id} value={owner.email}>
                  {owner.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export function Users({
  users,
  children,
  defaultValue,
}: {
  users: email[];
  children?: React.ReactNode;
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="owner">User</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="user" defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select user" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {users.map((user) => {
              return (
                <SelectItem key={user.email} value={user.email}>
                  {user.email}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
