"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { $Enums } from "@prisma/client";
import { id } from "@/types";

export function Header({
  title,
  userId,
  users,
  children,
  userRole,
}: {
  title: string;
  userId: number;
  users: id[];
  children?: React.ReactNode;
  userRole: $Enums.ROLE
}) {
  const router = useRouter();

  return (
    <>
      <div className="xs:hidden flex flex-col mt-6">
        <div className="flex justify-between">
          <Badge variant={userRole} className="h-min">{userRole.toLocaleLowerCase()}</Badge>
          <div className="flex gap-1">
            <Button
              onClick={
                userId - 1 > 0
                  ? () => router.push(`/users/${userId - 1}`)
                  : () => router.push(`/users/${users.length}`)
              }
              variant="outline"
              size="sm"
              className="rounded-full px-1"
            >
              <ChevronLeft />
            </Button>
            <Button
              onClick={
                userId < users.length
                  ? () => router.push(`/users/${userId + 1}`)
                  : () => router.push(`/users/${1}`)
              }
              variant="outline"
              size="sm"
              className="rounded-full px-1"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        <Heading variant="h1">{title}</Heading>
      </div>
      <div className="hidden xs:flex flex-col xs:mt-3 gap-2">
        <div className="flex gap-1">
          <Button
            onClick={
              userId - 1 > 0
                ? () => router.push(`/users/${userId - 1}`)
                : () => router.push(`/users/${users.length}`)
            }
            variant="outline"
            size="sm"
            className="rounded-full px-1"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={
              userId < users.length
                ? () => router.push(`/users/${userId + 1}`)
                : () => router.push(`/users/${1}`)
            }
            variant="outline"
            size="sm"
            className="rounded-full px-1"
          >
            <ChevronRight />
          </Button>
        </div>
        <div className="flex gap-4 items-start">
          <Heading variant="h1">{title}</Heading>
          {children}
        </div>
      </div>
    </>
  );
}
