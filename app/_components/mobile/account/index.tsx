"use client"

import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";

import { AccountItem } from "@/app/_components/sidebar/account/account-item";
import { SignOutItem } from "@/app/_components/sidebar/account/sign-out-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function Account({ email }: { email: string }) {
  const router = useRouter();

  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="/user.png" alt="user" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={8}
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
        <DropdownMenuItem
          onSelect={() => router.push("/notifications")}
          className="flex justify-between"
          >
          Notifications
          <Bell size={20} />
        </DropdownMenuItem>
        <AccountItem />
        <SignOutItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
