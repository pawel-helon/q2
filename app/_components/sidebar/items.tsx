"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UsersRound, Vault } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { ROLE } from "@prisma/client";

export function Items({ role, collapsed }: { role: ROLE; collapsed: boolean }) {
  const pathname = usePathname();

  return (
    <ul className={collapsed ? "flex flex-col gap-2 w-full items-center" : "flex flex-col gap-2 w-full px-2"}>
      <li>
        <Link href="/devices">
          <Button
            size="icon"
            className={cn(
              !collapsed && "h-9 w-full justify-between px-2 bg-primary text-whiteQ shadow hover:bg-primary/90",
              (pathname.startsWith("/devices") || pathname === "/add-device") ? "bg-primary hover:bg-primary/90" : "bg-border/80 hover:bg-border/60"
            )}
          >
            {!collapsed && "Devices"}
            <Vault />
          </Button>
        </Link>
      </li>
      {role === ROLE.ADMIN && (
        <li>
          <Link href="/users">
            <Button
              size="icon"
              className={cn(
                !collapsed && "h-9 w-full justify-between px-2 bg-primary text-whiteQ shadow hover:bg-primary/90",
                pathname.startsWith("/users") ? "bg-primary hover:bg-primary/90" : "bg-border/80 hover:bg-border/60"
              )}
            >
              {!collapsed && "Users"}
              <UsersRound />
            </Button>
          </Link>
        </li>
      )}
    </ul>
  );
}