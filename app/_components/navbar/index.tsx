import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "./breadcrumbs";
import { Actions } from "./actions";

export const Navbar = () => {
  return (
    <div className="w-full h-[64px] flex justify-between items-center">
      <Breadcrumbs />
      <Actions>
        <Button>
          <Plus className="-ml-2 mr-2"/>
          Add new device
        </Button>
      </Actions>
    </div>
  );
};
