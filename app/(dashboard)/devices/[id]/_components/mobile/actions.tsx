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
    <div className="z-50 flex gap-2 justify-end xs:hidden fixed bottom-0 left-3 right-3 bg-background/80 pt-2 pb-3">
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
