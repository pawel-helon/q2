import { $Enums } from "@prisma/client"
import { MoreButton } from "./more-button"
import { OpenCloseButton } from "./open-close-button"

interface ActionsProps {
  state: $Enums.STATE | undefined
}

export const Actions = ({ state }: ActionsProps) => {
  return (
    <div className="flex gap-2 justify-end">
    <OpenCloseButton state={state}/>
    <MoreButton />
  </div>
  )
}