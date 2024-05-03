import { signout } from "@/app/actions/auth/sign-out";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export const SignOutButton = () => {
  return (
    <form action={signout}>
      <button className="flex pl-1 text-sm justify-between items-center">
        Sign out
        <LogOut size={20}className="ml-8" />
      </button>
    </form>
  );
};
