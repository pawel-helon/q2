"use client";

import { OpenCloseButton } from "./open-close-button";
import { MoreButton } from "./more-button";

import { ROLE } from "@prisma/client";
import { device } from "@/types";

export function Actions({ device, role }: { device: device; role: ROLE }) {
  return (
    <div className="flex gap-2 justify-end">
      <OpenCloseButton device={device} />
      {role === "ADMIN" && <MoreButton device={device} />}
    </div>
  );
}
