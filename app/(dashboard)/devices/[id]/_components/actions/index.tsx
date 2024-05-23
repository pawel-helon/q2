"use client";

import { OpenCloseButton } from "./open-close-button";
import { MoreButton } from "./more-button";

import { ROLE } from "@prisma/client";
import { device, emails } from "@/types";

export function Actions({
  device,
  role,
  users,
  ownerEmail,
}: {
  device: device;
  role: ROLE;
  users: emails;
  ownerEmail: string;
}) {
  return (
    <div className="flex gap-2 justify-end">
      <OpenCloseButton device={device} />
      {role === "ADMIN" && (
        <MoreButton device={device} users={users} ownerEmail={ownerEmail} />
      )}
    </div>
  );
}
