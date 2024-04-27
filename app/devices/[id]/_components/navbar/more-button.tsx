import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { EllipsisVertical } from "lucide-react";

import { Device } from "@/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteDialog } from "./delete-dialog";
import { DeactivateDialog } from "./deactivate-dialog";

interface MoreButtonProps {
  device: Device | null;
}

export const MoreButton = ({ device }: MoreButtonProps) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeactivateDialogOpen, setIsDeactivateDialogOpen] = useState(false);
  
  const router = useRouter();

  const handleDeleteDevice = () => {
    setIsDeleteDialogOpen(false);
    setTimeout(() => {
      router.push("/users");
      toast("Device has been deleted");
    }, 500);
  };

  return (
    <>
      <DeleteDialog
        isDeleteDialogOpen={isDeleteDialogOpen}
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        device={device}
      />
      <DeactivateDialog
        isDeactivateDialogOpen={isDeactivateDialogOpen}
        setIsDeactivateDialogOpen={setIsDeactivateDialogOpen}
        device={device}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" sideOffset={8} align="end">
          <DropdownMenuItem onSelect={() => setIsDeactivateDialogOpen(true)}>
            Deactivate
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setIsDeleteDialogOpen(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
