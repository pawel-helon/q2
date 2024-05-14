import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { deactivateDevice } from "@/app/api/neon/deactivate-device";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Device } from "@/types";

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
  const router = useRouter();

  const handleDeactivateDevice = () => {
    deactivateDevice(id)
    setIsDeactivateDialogOpen(false);
    setTimeout(() => {
      toast("Device has been deactivated");
    }, 500);
    router.refresh()
  };

  return (
    <Dialog open={isDeactivateDialogOpen}>
      <DialogContent onInteractOutside={() => setIsDeactivateDialogOpen(false)}>
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
