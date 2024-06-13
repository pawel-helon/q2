"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { AddDeviceFormAdmin } from "./add-device-form-admin";
import { AddDeviceFormEndUser } from "./add-device-form-end-user";
import { DialogContent } from "@/components/dialog-content";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { ROLE, User } from "@prisma/client";

export function AddDevice({
  role,
  userId,
  users,
}: {
  role: ROLE;
  userId: number;
  users: User[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="xs:hidden absolute bottom-3 right-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="size-11 shadow-2xl shadow-black rounded-full"
            >
              <Plus />
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle className="text-left">Add new device</SheetTitle>
            </SheetHeader>
            {role !== ROLE.ENDUSER ? (
              <AddDeviceFormAdmin users={users} />
            ) : (
              <AddDeviceFormEndUser userId={userId} />
            )}
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden xs:block">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-5 -ml-2 mr-2" />
              Add device
            </Button>
          </DialogTrigger>
          <DialogContent title="Add new device">
            {role !== ROLE.ENDUSER ? (
              <AddDeviceFormAdmin users={users} />
            ) : (
              <AddDeviceFormEndUser userId={userId} />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export function AddDeviceMobile({
  role,
  userId,
  users,
}: {
  role: ROLE;
  userId: number;
  users: User[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="xs:hidden absolute bottom-3 right-3">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="size-11 shadow-2xl shadow-black rounded-full"
            >
              <Plus />
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left">Add new device</SheetTitle>
            </SheetHeader>
            {role !== ROLE.ENDUSER ? (
              <AddDeviceFormAdmin users={users} />
            ) : (
              <AddDeviceFormEndUser userId={userId} />
            )}
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}