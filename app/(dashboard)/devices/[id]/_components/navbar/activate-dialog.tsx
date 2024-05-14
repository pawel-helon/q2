import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { activateDevice } from "@/app/api/neon/activate-device-mb";
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

interface ActivateDialogProps {
  isActivateDialogOpen: boolean;
  setIsActivateDialogOpen: (value: boolean) => void;
  device: Device | null;
}

export const ActivateDialog = ({
  isActivateDialogOpen,
  setIsActivateDialogOpen,
  device,
}: ActivateDialogProps) => {
  const id = Number(device?.id);
  const router = useRouter();

  const handleActivateDevice = () => {
    activateDevice(id);
    setIsActivateDialogOpen(false);
    setTimeout(() => {
      toast("Device has been deactivated");
    }, 500);
    router.refresh()
  };

  return (
    <Dialog open={isActivateDialogOpen}>
      <DialogContent onInteractOutside={() => setIsActivateDialogOpen(false)}>
        <DialogHeader>
          <DialogTitle>Activate device</DialogTitle>
          <DialogDescription>
            Are you sure you want to activate this device?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2">
          <Button
            variant="ghost"
            onClick={() => setIsActivateDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleActivateDevice}>Activate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
