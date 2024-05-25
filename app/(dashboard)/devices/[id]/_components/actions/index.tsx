"use client";

import { ChangeState } from "./change-state";
import { More } from "./more";

import { Device, ROLE } from "@prisma/client";
import { email } from "@/types";

export function Actions({
  device,
  role,
  users,
  ownerEmail,
}: {
  device: Device;
  role: ROLE;
  users: email[];
  ownerEmail: string;
}) {
  return (
    <div className="flex gap-2 justify-end">
      <ChangeState device={device} />
      {role === ROLE.ADMIN && (
        <More device={device} users={users} ownerEmail={ownerEmail} />
      )}
    </div>
  );
}
