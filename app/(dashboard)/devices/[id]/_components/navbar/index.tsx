import { Breadcrumbs } from "@/components/breadcrumbs";
import { Actions } from "./actions";
import { Device } from "@/types";

interface NavbarProps {
  device: Device | null;
  role: unknown;
}

export const Navbar = ({ device, role }: NavbarProps) => {
  return (
    <div className="w-full py-6 flex justify-between items-center">
      <Breadcrumbs />
      <div className="flex gap-2 justify-end">
        <Actions device={device} role={role} />
      </div>
    </div>
  );
};
