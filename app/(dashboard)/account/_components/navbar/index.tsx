"use server"

import { Breadcrumbs } from "@/components/breadcrumbs";
import { DeleteAccountDialog } from "./delete-account-dialog";

interface NavbarProps {
  userId: number;
}

export const Navbar = ({ userId }: NavbarProps) => {
  return (
    <div className="w-full py-6 flex justify-between items-center">
      <Breadcrumbs />
      <div className="flex gap-2 justify-end">
        <DeleteAccountDialog userId={userId}/>
      </div>
    </div>
  );
};
