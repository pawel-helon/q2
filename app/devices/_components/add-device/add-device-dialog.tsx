import { X } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AddDeviceForm } from "./add-device-form";

export const AddDeviceDialog = () => {
  return (
    <Dialog>
      <DialogContent className="md:max-w-[720px] bg-grayQ">
        <DialogHeader>
          <div className="flex justify-between">
            <DialogTitle>
              Add new device
            </DialogTitle>
            <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#343437] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="size-5" />
            </DialogClose>
          </div>
        </DialogHeader>
        {/* <AddDeviceForm /> */}
      </DialogContent>
    </Dialog>
  );
};
