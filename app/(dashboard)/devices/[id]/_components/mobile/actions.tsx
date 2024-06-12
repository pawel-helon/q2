"use client";

import { Device, ROLE } from "@prisma/client";
import { email } from "@/types";
import { ChangeState } from "../actions/change-state";
import { More } from "../actions/more";

export function ActionsMobile({
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
    <div className="flex gap-2 justify-end xs:hidden fixed bottom-4 z-10 right-4">
      <ChangeState device={device} />
      {role !== ROLE.ENDUSER && (
        <More
          userId={userId}
          device={device}
          users={users}
          ownerEmail={ownerEmail}
        />
      )}
    </div>
  );
}
