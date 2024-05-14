"use client"

import { openCloseDevice } from "@/app/api/neon/open-close-device";
import { Button } from "@/components/ui/button"
import { Device } from "@/types";
import { $Enums, STATUS } from "@prisma/client"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface OpenCloseButtonProps {
  device: Device | null
}

export const OpenCloseButton = ({ device }: OpenCloseButtonProps) => {
  const state = device?.state
  const status = device?.status
  const router = useRouter()
  const id = Number(device?.id)
  
  const handleOpenClose = () => {
    openCloseDevice(id, state);
    setTimeout(() => {
      state === $Enums.STATE.OPENED
        ? toast("Device has been closed")
        : toast("Device has been opened");
    }, 500);
    router.refresh();
  }
  

  return (
    <Button
      disabled={status === STATUS.INACTIVE}
      onClick={handleOpenClose}
    >
      {state === $Enums.STATE.OPENED ? "Close" : "Open"}
    </Button>
  )
}
