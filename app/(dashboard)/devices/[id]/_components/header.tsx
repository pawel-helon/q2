"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/typography";
import { Button } from "@/components/ui/button";

import { id } from "@/types";
import { Tooltip } from "@/components/tooltip";
import { Badge } from "@/components/ui/badge";
import { Device } from "@prisma/client";

export function Header({
  title,
  deviceId,
  devices,
  device,
  children,
}: {
  title: string;
  deviceId: number;
  device: Device;
  devices: id[];
  children?: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <>
      <div className="xs:hidden flex flex-col mt-[88px]">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <Tooltip title="Device status">
              <Badge variant={device.status}>
                {device.status.toLowerCase()}
              </Badge>
            </Tooltip>
            <Tooltip title="Device state">
              <Badge variant={device.state}>{device.state.toLowerCase()}</Badge>
            </Tooltip>
          </div>
          <div className="flex gap-1">
            <Button
              onClick={
                deviceId - 1 > 0
                  ? () => router.push(`/devices/${deviceId - 1}`)
                  : () => router.push(`/devices/${devices.length}`)
              }
              variant="outline"
              size="sm"
              className="rounded-full px-1"
            >
              <ChevronLeft />
            </Button>
            <Button
              onClick={
                deviceId < devices.length
                  ? () => router.push(`/devices/${deviceId + 1}`)
                  : () => router.push(`/devices/${1}`)
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
              deviceId - 1 > 0
                ? () => router.push(`/devices/${deviceId - 1}`)
                : () => router.push(`/devices/${devices.length}`)
            }
            variant="outline"
            size="sm"
            className="rounded-full px-1"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={
              deviceId < devices.length
                ? () => router.push(`/devices/${deviceId + 1}`)
                : () => router.push(`/devices/${1}`)
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
