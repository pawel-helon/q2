"use client";

import { Notification, ROLE } from "@prisma/client";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ContentDesktop({
  role,
  email,
  notifications,
  children,
}: {
  role: ROLE;
  email: string;
  notifications: Notification[];
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="hidden xs:flex relative min-h-screen mx-auto xl:max-w-screen-2xl 2xl:max-w-screen-2xl scrollbar max-h-[100vh] overflow-y-scroll scrollbar-w-2 scrollbar-h-2 scrollbar-track-card-background scrollbar-thumb-rounded-full scrollbar-thumb-muted">
      <Sidebar
        role={role}
        email={email}
        notifications={notifications}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div
        className={cn(
          "flex flex-col width54 px-6 border-r-[1px] border-border",
          !collapsed && "width220"
        )}
      >
        {children}
      </div>
    </div>
  );
}
