import { X } from "lucide-react";

import { Heading } from "@/components/typography";
import { setOpen } from "@/types";

interface NotificationsHeaderProps {
  open: boolean;
  setOpen: setOpen;
}

export const NotificationsHeader = ({
  open,
  setOpen,
}: NotificationsHeaderProps) => {
  return (
    <div className="flex justify-between border-b px-4 pb-4 mb-4">
      <Heading variant="h4">Notifications</Heading>
      <button onClick={() => setOpen(!open)}>
        <X size={16} />
      </button>
    </div>
  );
};
