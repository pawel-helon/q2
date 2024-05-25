import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { SignOutItem } from "./sign-out-item";
import { AccountItem } from "./account-item";
import { email } from "@/types";

interface AccountProps {
  collapsed: boolean;
  email: email;
}

export const Account = ({ collapsed, email }: AccountProps) => {
  return (
    <div
      className={cn(
        "flex w-full items-center ml-[3px] px-[6px] mb-5 animate transition-all",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="/user.png" alt="user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" sideOffset={12} align="end">
          <div className="flex gap-2 items-center rounded-sm px-2 py-1.5 text-xs text-muted-foreground">
            <Avatar className="size-6">
              <AvatarImage src="/user.png" alt="user" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {email?.email}
          </div>
          <DropdownMenuSeparator />
          <AccountItem />
          <SignOutItem />
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="w-full" />
    </div>
  );
};
