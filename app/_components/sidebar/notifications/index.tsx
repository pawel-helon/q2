"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { EmptyItem } from "./empty-item";
import { Items } from "./items";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { NotificationsHeader } from "./notifications-header";
import { useState } from "react";
import { notifications } from "@/types";

export function Notifications({
  collapsed,
  notifications,
}: {
  collapsed: boolean;
  notifications: notifications;
}) {
  const hasNotifications = notifications.length > 0;
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex w-full items-center ml-[3px] px-[6px] mb-5 animate transition-all",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="relative rounded-full bg-muted hover:bg-muted min-w-9 size-9 p-0"
          >
            <Bell />
            {hasNotifications && (
              <div className="absolute top-0.5 right-0.5 size-2 bg-primary rounded-full" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          sideOffset={12}
          align="end"
          className="p-0"
        >
          <NotificationsHeader setOpen={setOpen} />
          {hasNotifications ? (
            <Items notifications={notifications} />
          ) : (
            <EmptyItem />
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="w-full" />
    </div>
  );
}
