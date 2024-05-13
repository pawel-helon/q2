"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Container } from "lucide-react";

import { Breadcrumbs } from "./breadcrumbs";

interface NavbarProps {
  children?: React.ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <div className="w-full py-6 flex justify-between items-center">
      {pathname === "/" ? (
        <Link href="/">
          <Container />
        </Link>
      ) : (
        <Breadcrumbs />
      )}
      <div className="flex justify-end gap-2">
        {children}
      </div>
    </div>
  );
};
