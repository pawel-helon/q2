"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/typography";
import { Button } from "@/components/ui/button";

import { deviceName } from "@/types";

export function Header({
  title,
  deviceId,
  devices,
  children,
}: {
  title: string;
  deviceId: number;
  devices: deviceName[];
  children?: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="mt-3 flex flex-col gap-2">
      <div className="flex gap-1">
        <Button
          onClick={
            deviceId - 1 > 0
              ? () => router.push(`/devices/${devices[deviceId - 1].id}`)
              : () => router.push(`/devices/${devices[devices.length - 1].id}`)
          }
          variant="outline"
          size="sm"
          className="rounded-full px-1"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={
            deviceId + 1 < devices.length
              ? () => router.push(`/devices/${devices[deviceId + 1].id}`)
              : () => router.push(`/devices/${devices[0].id}`)
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
  );
}
