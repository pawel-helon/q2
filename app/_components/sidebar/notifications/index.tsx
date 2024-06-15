"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

import { Items } from "./items";
import { EmptyItem } from "./empty-item";
import { NotificationsHeader } from "./notifications-header";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { Notification } from "@prisma/client";

export function Notifications({
  collapsed,
  notifications,
}: {
  collapsed: boolean;
  notifications: Notification[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex w-full items-center ml-[3px] px-[6px] animate transition-all",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button size="icon" className="relative rounded-full bg-muted hover:bg-muted min-w-9 size-9 p-0">
            <Bell />
            {notifications.length > 0 && <div className="absolute top-0.5 right-0.5 size-2 bg-primary rounded-full" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="right"
          sideOffset={12}
          align="end"
          className="p-0 w-[429px] bg-background border border-border shadow-black shadow-lg"
        >
          <NotificationsHeader setOpen={setOpen} />
          {notifications.length > 0 ? (
            <Items notifications={notifications} />
          ) : (
            <EmptyItem />
          )}
        </PopoverContent>
      </Popover>
      <div className="w-full" />
    </div>
  );
}
