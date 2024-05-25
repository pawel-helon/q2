"use server"

import { fetchUser } from "@/app/actions/fetchUser";

import { fetchOwners } from "@/app/api/neon";

import { Status } from "./status";
import { DetailsCard } from "./details-card";

import { ROLE } from "@prisma/client";
import { device, owner } from "@/types";

export async function GeneralTab({
  role,
  device,
}: {
  role: ROLE;
  device: device;
}) {
  const owner  = await fetchUser(device.ownerId) as owner;
  const owners = (await fetchOwners()) as owner[];

  return (
    <div className="mt-12 w-full flex flex-col gap-4 md:grid md:grid-cols-3 mb-12">
      <Status />
      <DetailsCard
        device={device}
        role={role}
        owner={owner}
        owners={owners}
      />
    </div>
  );
}
