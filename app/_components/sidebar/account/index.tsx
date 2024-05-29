"use client";

import { SignOutItem } from "./sign-out-item";
import { AccountItem } from "./account-item";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function Account({
  collapsed,
  email,
}: {
  collapsed: boolean;
  email: string;
}) {
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
          sideOffset={12}
          align="end"
          className="bg-background shadow-black shadow-lg"
        >
          <div className="flex gap-2 items-center rounded-sm px-2 py-1.5 text-xs text-muted-foreground">
            <Avatar className="size-6">
              <AvatarImage src="/user.png" alt="user" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {email}
          </div>
          <DropdownMenuSeparator />
          <AccountItem />
          <SignOutItem />
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="w-full" />
    </div>
  );
}
