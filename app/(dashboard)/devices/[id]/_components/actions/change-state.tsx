"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { update } from "@/lib/data/update";

import { Button } from "@/components/ui/button";

import { Device, STATUS, $Enums } from "@prisma/client";

export function ChangeState({ device }: { device: Device }) {
  const router = useRouter();

  const handleClick = () => {
    update(
      device.id,
      "device",
      "state",
      device.state === $Enums.STATE.OPENED
        ? $Enums.STATE.CLOSED
        : $Enums.STATE.OPENED
    ).then(() => {
      setTimeout(() => {
        device.state === $Enums.STATE.OPENED
          ? toast.success("Device has been closed")
          : toast.success("Device has been opened");
      }, 500);
      router.refresh();
    });
  };

  return (
    <Button disabled={device.status === STATUS.INACTIVE} onClick={handleClick}>
      {device.state === $Enums.STATE.OPENED ? "Close" : "Open"}
    </Button>
  );
}
