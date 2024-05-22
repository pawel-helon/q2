"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { openCloseDevice } from "@/app/api/neon/open-close-device";
import { Button } from "@/components/ui/button";

import { $Enums, STATUS } from "@prisma/client";
import { device } from "@/types";

export function OpenCloseButton({ device }: { device: device }) {
  const router = useRouter();

  const handleOpenClose = () => {
    openCloseDevice(device.id, device.state);
    setTimeout(() => {
      device.state === $Enums.STATE.OPENED
        ? toast("Device has been closed")
        : toast("Device has been opened");
    }, 500);
    router.refresh();
  };

  return (
    <Button
      disabled={device.status === STATUS.INACTIVE}
      onClick={handleOpenClose}
    >
      {device.state === $Enums.STATE.OPENED ? "Close" : "Open"}
    </Button>
  );
}
