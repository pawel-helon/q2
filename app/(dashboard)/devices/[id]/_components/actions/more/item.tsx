"use client";

import { Sheet } from "@/components/dial-sheet/sheet";
import { SheetClose } from "@/components/ui/sheet";
import { Dialog } from "@/components/dial-sheet/dialog";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Trigger } from "@/components/dial-sheet/trigger";
import { Button } from "@/components/ui/button";

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
    <>
      <Sheet
        title={dialogTitle}
        description={dialogDescription}
        trigger={<Trigger title={cta} variant="menuItem" />}
        side="bottom"
      >
        <div className="flex flex-col mt-6">
          <SheetClose asChild>
            <Button variant="ghost">Cancel</Button>
          </SheetClose>
          <Button onClick={action}>{cta}</Button>
        </div>
      </Sheet>
      <Dialog
        title={dialogTitle}
        description={dialogDescription}
        trigger={<Trigger title={cta} variant="menuItem" />}
      >
        <DialogFooter className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={action}>{cta}</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
