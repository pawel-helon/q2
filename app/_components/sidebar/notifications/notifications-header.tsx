import { X } from "lucide-react";

import { Heading } from "@/components/typography";
import { Dispatch, SetStateAction } from "react";

interface NotificationsHeaderProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const NotificationsHeader = ({
  open,
  setOpen,
}: NotificationsHeaderProps) => {
  return (
    <div className="flex justify-between border-b pb-4 mb-4">
      <Heading variant="h4">Notifications</Heading>
      <button onClick={() => setOpen(!open)}>
        <X size={16} />
      </button>
    </div>
  );
};
