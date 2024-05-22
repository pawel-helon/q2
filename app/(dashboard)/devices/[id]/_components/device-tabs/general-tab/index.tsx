"use server"

import { fetchUser } from "@/app/actions/fetchUser";

import { Status } from "./status";
import { DetailsCard } from "./details-card";
import { device } from "@/types";
import { fetchOwners } from "@/app/api/neon";

export async function GeneralTab({
  role,
  device,
}: {
  role: unknown;
  device: device | null;
}) {
  const owner  = await fetchUser(device!.ownerId);
  const ownerName = String(owner?.name);
  const ownerEmail = String(owner?.email);
  const owners = await fetchOwners();

  return (
    <div className="mt-12 w-full flex flex-col gap-4 md:grid md:grid-cols-3 mb-12">
      <Status />
      <DetailsCard
        device={device}
        role={role}
        ownerName={ownerName}
        ownerEmail={ownerEmail}
        owners={owners}
      />
    </div>
  );
}
