"use client"

import { Button } from "@/components/ui/button"
import { $Enums } from "@prisma/client"

interface OpenCloseButtonProps {
  state: $Enums.STATE | undefined
}

export const OpenCloseButton = ({ state }: OpenCloseButtonProps) => {

  const handleOpenClose = () => {
    console.log("Open/Close button clicked")
  }
  
  return (
    <Button onClick={handleOpenClose}>
      {state === $Enums.STATE.OPENED ? "Close" : "Open"}
    </Button>
  )
}
