import { X } from "lucide-react";

import { Heading } from "@/components/typography";
import { setOpen } from "@/types";

export function NotificationsHeader({ setOpen }: { setOpen: setOpen }) {
  return (
    <div className="flex justify-between border-b p-4">
      <Heading variant="h4">Notifications</Heading>
      <button onClick={() => setOpen(false)}>
        <X size={16} />
      </button>
    </div>
  );
}
