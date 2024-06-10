"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function Nav() {
  const router = useRouter();
  const pathname = usePathname()

  return (
    <div className="space-x-1 rounded-full bg-secondary p-1">
      <Button
        onClick={() => router.push("/devices")}
        size="sm"
        className="rounded-full"
        variant={pathname.startsWith("/devices") ? "default" : "ghost"}
      >
        Devices
      </Button>
      <Button
        onClick={() => router.push("/users")}
        size="sm"
        className="rounded-full"
        variant={pathname.startsWith("/users") ? "default" : "ghost"}
      >
        Users
      </Button>
    </div>
  );
}
