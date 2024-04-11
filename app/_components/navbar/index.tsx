import { Breadcrumbs } from "./breadcrumbs";
import { AddDeviceDialog } from "@/app/devices/_components/add-device/add-device-dialog";

export const Navbar = () => {
  return (
    <div className="w-full py-6 flex justify-between items-center">
      <Breadcrumbs />
      <div className="flex gap-2 justify-end">
        <AddDeviceDialog />
      </div>
    </div>
  );
};
