"use client"

import { MoreButton } from "./more-button"
import { OpenCloseButton } from "./open-close-button"
import { Device } from "@/types"

interface ActionsProps {
  device: Device | null;
  role: string | null | undefined;
}

export const Actions = ({ device, role }: ActionsProps) => {
  return (
    <div className="flex gap-2 justify-end">
    <OpenCloseButton device={device} />
    {role !== "org:member" && <MoreButton device={device}/>}
  </div>
  )
}   