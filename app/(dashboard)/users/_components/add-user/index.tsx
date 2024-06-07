"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { AddUserForm } from "./add-user-form";
import { DialogContent } from "@/components/dialog-content";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
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
