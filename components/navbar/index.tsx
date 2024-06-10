"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Container } from "lucide-react";

import { Breadcrumbs } from "./breadcrumbs";
import { cn } from "@/lib/utils";

export function Navbar({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div className={cn("hidden xs:flex w-full py-6 justify-between items-center", className)}>
      {pathname === "/" || pathname === "/sign-in" || pathname === "/sign-up" ? (
        <Link href="/">
          <Container />
        </Link>
      ) : (
        <Breadcrumbs />
      )}
      <div className="flex justify-end gap-2">{children}</div>
    </div>
  );
}
