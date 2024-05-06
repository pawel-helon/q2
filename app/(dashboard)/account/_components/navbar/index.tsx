"use server"

import { Breadcrumbs } from "./breadcrumbs";
import { DeleteAccountDialog } from "./delete-account-dialog";

export const Navbar = () => {
  return (
    <div className="w-full py-6 flex justify-between items-center">
      <Breadcrumbs />
      <div className="flex gap-2 justify-end">
        <DeleteAccountDialog />
      </div>
    </div>
  );
};
