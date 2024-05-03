"use server"

import { $Enums } from "@prisma/client";
import { Breadcrumbs } from "./breadcrumbs";
import { AddDeviceDialog } from "@/app/archive/devices/_components/add-device/add-device-dialog";

interface NavbarProps {
  owners: {
    id: number;
    email: string;
    name: string | null;
    role: $Enums.ROLE;
  }[];

}

export const Navbar = ({ owners }: NavbarProps) => {
  return (
    <div className="w-full py-6 flex justify-between items-center">
      <Breadcrumbs />
      <div className="flex gap-2 justify-end">
        <AddDeviceDialog owners={owners}/>
      </div>
    </div>
  );
};
