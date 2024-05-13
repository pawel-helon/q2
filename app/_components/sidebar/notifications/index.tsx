"use client";

import { Bell } from "lucide-react";

import { SplitButton } from "@/components/split-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NotificationsProps {
  collapsed: boolean;
  notifications: {
    id: number;
    title: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export const Notifications = ({
  collapsed,
  notifications,
}: NotificationsProps) => {
  console.log("notifications", notifications);

  if (notifications.length === 0) {
    return (
      <div
      className={cn(
        "flex w-full items-center ml-[3px] px-[6px] mb-5 animate transition-all",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="rounded-full bg-muted hover:bg-muted min-w-9 size-9 p-0"
          >
            <Bell />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          sideOffset={7}
          align="end"
          className="p-2"
        >
          <div className="flex flex-col gap-6 rounded-sm">
          <p>You don&apos;t have any notifications yet </p>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="w-full" />
    </div>
    )
  }
  
  return (
    <div
      className={cn(
        "flex w-full items-center ml-[3px] px-[6px] mb-5 animate transition-all",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="rounded-full bg-muted hover:bg-muted min-w-9 size-9 p-0"
          >
            <Bell />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          sideOffset={7}
          align="end"
          className="p-2"
        >
          <div className="flex flex-col gap-6 rounded-sm">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex gap-2 items-center rounded-sm px-2 py-1.5 text-xs text-muted-foreground mr-4"
              >
                <Avatar className="size-6">
                  <AvatarImage src="/user.png" alt="user" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="w-full flex flex-col mr-4">
                  <p className="text-xs text-white">Role change request</p>
                  <p>{notification.title}</p>
                </div>
                <SplitButton
                  primaryAction={() => console.log("clicked accept")}
                  primaryActionLabel="Accept"
                  secondaryAction={() => console.log("clicked decline")}
                  secondaryActionLabel="Decline"
                />
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="w-full" />
    </div>
  );
};
