"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { AddUserForm } from "./add-user-form";
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

export const AddUser = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-5 -ml-2 mr-2" />
          Add user
        </Button>
      </DialogTrigger>
      <DialogContent title="Add new user">
        <AddUserForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export const AddUserMobile = () => {
  const [open, setOpen] = useState(false);

  return (
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
            <SheetTitle className="text-left">Add new user</SheetTitle>
          </SheetHeader>
          <AddUserForm setOpen={setOpen} />
        </SheetContent>
      </Sheet>
    </div>
  );
};
