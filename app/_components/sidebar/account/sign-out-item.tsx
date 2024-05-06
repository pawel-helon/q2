import { signout } from "@/app/actions/auth/sign-out";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

export const SignOutItem = () => {
  return (
    <DropdownMenuItem>
      <form action={signout} className="w-full">
        <button className="flex justify-between items-center w-full">
          Sign out
          <LogOut size={20} />
        </button>
      </form>
    </DropdownMenuItem>
  );
};
