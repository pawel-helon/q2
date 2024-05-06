import { X } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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
import { deleteDevice } from "@/app/api/neon/delete-device";

interface DeleteDialogProps {
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (value: boolean) => void;
  device: Device | null;
}

export const DeleteDialog = ({
  isDeleteDialogOpen,
  setIsDeleteDialogOpen,
  device,
}: DeleteDialogProps) => {
  const router = useRouter();
  const id = Number(device?.id);

  const handleDeleteDevice = () => {
    deleteDevice(id);
    setIsDeleteDialogOpen(false);
    setTimeout(() => {
      router.push("/devices");
      toast("Device has been deleted");
    }, 500);
  };
  return (
    <Dialog open={isDeleteDialogOpen}>
      <DialogContent onInteractOutside={() => setIsDeleteDialogOpen(false)}>
        {/* <DialogClose
          onClick={() => setIsDeleteDialogOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="size-4" />
        </DialogClose> */}
        <DialogHeader>
          <DialogTitle>Delete device</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this device?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2">
          <Button
            variant="ghost"
            onClick={() => setIsDeleteDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleDeleteDevice}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
