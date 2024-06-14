"use client";

import { Table } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { deleteDeviceTanstack } from "@/lib/data/delete";

import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { setOpen } from "@/types";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function DeleteDevices<TData>({
  table,
  ids,
  setOpen,
}: {
  table: Table<TData>;
  ids: any[];
  setOpen: setOpen;
}) {
  const router = useRouter();

  return (
    <>
      <div className="xs:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Delete
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle className="text-left">Delete device(s)</SheetTitle>
              <SheetDescription className="text-left">
                {" "}
                This action cannot be undone. This will permanently delete
                device(s) and remove data from our servers.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2">
              <SheetClose asChild>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </SheetClose>
              <Button
                onClick={() => {
                  deleteDeviceTanstack(ids).then(() => {
                    setTimeout(() => {
                      setOpen(false);
                      toast.success("Device(s) deleted");
                      table.resetRowSelection();
                    }, 500);
                    router.refresh();
                  });
                }}
              >
                Delete
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden xs:block">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent title="Delete device(s)">
            <DialogDescription>
              {" "}
              This action cannot be undone. This will permanently delete
              device(s) and remove data from our servers.
            </DialogDescription>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DialogClose>
              <Button
                onClick={() => {
                  deleteDeviceTanstack(ids).then(() => {
                    setTimeout(() => {
                      setOpen(false);
                      toast.success("Device(s) deleted");
                      table.resetRowSelection();
                    }, 500);
                    router.refresh();
                  });
                }}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
