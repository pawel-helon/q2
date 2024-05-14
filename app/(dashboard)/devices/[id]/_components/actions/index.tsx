"use client";

import { MoreButton } from "./more-button";
import { Device } from "@/types";
import { OpenCloseButton } from "./open-close-button";

interface ActionsProps {
  device: Device | null;
  role: unknown;
}

export const Actions = ({ device, role }: ActionsProps) => {
  return (
    <div className="flex gap-2 justify-end">
      <OpenCloseButton device={device} />
      {role === "ADMIN" && <MoreButton device={device} />}
    </div>
  );
};
