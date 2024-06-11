"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { remove } from "@/lib/data/delete";

import { DialogContent } from "@/components/dialog-content";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { setOpen } from "@/types";

export function Delete({
  userId,
  setOpen,
}: {
  userId: number;
  setOpen: setOpen;
}) {
  const router = useRouter();

  function handleDelete() {
    remove(userId, "user").then(() => {
      setTimeout(() => {
        setOpen(false);
        toast.success("Account deleted successfully");
      });
      router.push("/users");
      router.refresh();
    });
  }

  return (
    <>
      <div className="xs:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={cn(
                "w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                "transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none",
                "data-[disabled]:opacity-50 hover:bg-accent"
              )}
            >
              Delete device
            </button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader className="text-left mb-6">
              <SheetTitle>Delete Account</SheetTitle>
              <SheetDescription>
                Are you sure you want to delete this account? This action cannot
                be undone.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col mt-6">
              <SheetClose asChild>
                <Button variant="ghost">Cancel</Button>
              </SheetClose>
              <Button onClick={handleDelete}>Delete</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden xs:block">
        <Dialog>
          <DialogTrigger asChild>
            <button
              className={cn(
                "w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                "transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none",
                "data-[disabled]:opacity-50 hover:bg-accent"
              )}
            >
              Delete account
            </button>
          </DialogTrigger>
          <DialogContent title="Delete account">
            <DialogDescription>
              Are you sure you want to delete this account? This action cannot
              be undone.
            </DialogDescription>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DialogClose>
              <Button onClick={handleDelete}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
