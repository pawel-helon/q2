import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "./breadcrumbs";
import { AddDeviceDialog } from "@/app/devices/_components/add-device/add-device-dialog";
import { Plus } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full py-6 flex justify-between items-center">
      <Breadcrumbs />
      <div className="flex gap-2 justify-end">
        <Button>
          <Plus className="-ml-2 mr-2" />
          Add user
        </Button>
      </div>
    </div>
  );
};
