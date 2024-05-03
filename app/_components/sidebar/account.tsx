import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { SignOutButton } from "./sign-out-button";

interface AccountProps {
  collapsed: boolean;
}

export const Account = ({ collapsed }: AccountProps) => {
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
        <DropdownMenuContent
          side="right"
          sideOffset={8}
          align="end"
        >
          <SignOutButton />
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="w-full" />
    </div>
  );
};
