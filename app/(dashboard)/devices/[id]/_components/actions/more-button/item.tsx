"use client";

import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActivateProps {
  cta: string;
  dialogTitle: string;
  dialogDescription: string;
  action: () => void;
}

export const Item = ({
  cta,
  dialogTitle,
  dialogDescription,
  action,
}: ActivateProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            "w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
            "transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none",
            "data-[disabled]:opacity-50 hover:bg-accent"
          )}
        >
          {cta}
        </button>
      </DialogTrigger>
      <DialogContent title={dialogTitle}>
        <DialogDescription className="mb-4">
          {dialogDescription}
        </DialogDescription>
        <DialogFooter className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={action}>{cta}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
