"use server";

import { Status } from "./status";
import { DetailsCard } from "./details-card";

import { readMany, readUnique } from "@/lib/data/read";

import { Device, ROLE } from "@prisma/client";
import { email } from "@/types";

export async function GeneralTab({
  role,
  device,
}: {
  role: ROLE;
  device: Device;
}) {
  const ownerName = (await readUnique(device.ownerId, "user", "name")) as string;
  const ownerEmail = (await readUnique(device.ownerId, "user", "email")) as string;
  const users = (await readMany("users", "email")) as email[];

  return (
    <div className="mt-6 xs:mt-12 w-full flex flex-col gap-4 md:grid md:grid-cols-3 mb-12">
      <Status />
      <DetailsCard
        device={device}
        role={role}
        ownerEmail={ownerEmail}
        ownerName={ownerName}
        users={users}
      />
    </div>
  );
}
