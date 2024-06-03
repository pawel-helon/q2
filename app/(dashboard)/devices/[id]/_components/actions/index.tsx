"use client";

import { ChangeState } from "./change-state";
import { More } from "./more";

import { Device, ROLE } from "@prisma/client";
import { email } from "@/types";

export function Actions({
  role,
  userId,
  device,
  users,
  ownerEmail,
}: {
  role: ROLE;
  userId: number;
  device: Device;
  users: email[];
  ownerEmail: string;
}) {
  return (
    <div className="flex gap-2 justify-end">
      <ChangeState device={device} />
      {role !== ROLE.ENDUSER && (
        <More userId={userId} device={device} users={users} ownerEmail={ownerEmail} />
      )}
    </div>
  );
}
