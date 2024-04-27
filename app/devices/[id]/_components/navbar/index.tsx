import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "./breadcrumbs";
import { Actions } from "./actions";
import { $Enums } from "@prisma/client";

interface NavbarProps {
    deviceName: string | undefined;
    state: $Enums.STATE | undefined
}

export const Navbar = ({ deviceName, state }: NavbarProps) => {
  return (
    <div className="w-full py-6 flex justify-between items-center">
      <Breadcrumbs deviceName={deviceName}/>
      <div className="flex gap-2 justify-end">
        <Actions state={state}/>
      </div>
    </div>
  );
};
