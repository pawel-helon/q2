import { X } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Device } from "@/types";
import { deactivateDevice } from "@/app/api/neon/deactivate-device";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

interface DeactivateDialogProps {
  isDeactivateDialogOpen: boolean;
  setIsDeactivateDialogOpen: (value: boolean) => void;
  device: Device | null;
}

export const DeactivateDialog = ({
  isDeactivateDialogOpen,
  setIsDeactivateDialogOpen,
  device
}: DeactivateDialogProps) => {
  const id = Number(device?.id)

  const handleDeactivateDevice = () => {
    deactivateDevice(id)
    setIsDeactivateDialogOpen(false);
    setTimeout(() => {
      toast("Device has been deactivated");
    }, 500);
  };

  return (
    <Dialog open={isDeactivateDialogOpen}>
      <DialogContent onInteractOutside={() => setIsDeactivateDialogOpen(false)}>
        <DialogClose
          onClick={() => setIsDeactivateDialogOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="size-4" />
        </DialogClose>
        <DialogHeader>
          <DialogTitle>
            Deactivate device
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to deactivate this device?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2">
          <Button
            variant="ghost"
            onClick={() => setIsDeactivateDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleDeactivateDevice}>Deactivate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
