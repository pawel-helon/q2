import { Breadcrumbs } from "./breadcrumbs";
import { Actions } from "./actions";
import { $Enums } from "@prisma/client";
import { Device } from "@/types";

interface NavbarProps {
    device: Device | null;
    role: string | null | undefined;
}

export const Navbar = ({ device, role }: NavbarProps) => {
  return (
    <div className="w-full py-6 flex justify-between items-center">
      <Breadcrumbs device={device} />
      <div className="flex gap-2 justify-end">
        <Actions device={device} role={role}/>
      </div>
    </div>
  );
};
