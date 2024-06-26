"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {pathname === "/notifications" || pathname === "/account" ? (
        <Button
          onClick={() => router.back()}
          variant="secondary"
          size="icon"
          className="rounded-full"
        >
          <ChevronLeft />
        </Button>
      ) : (
        <div className="rounded-full bg-secondary p-1">
          <Button
            onClick={() => router.push("/devices")}
            size="sm"
            className="rounded-full px-2 py-1"
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
      )}
    </>
  );
}
