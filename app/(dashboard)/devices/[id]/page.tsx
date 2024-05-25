"use server";

import { verifySession } from "@/lib/data-access-layer";
import { readUnique, readMany } from "@/lib/data/read";

import { DeviceTabs } from "./_components/device-tabs";
import { GeneralTab } from "./_components/device-tabs/general-tab";
import { Actions } from "./_components/actions";
import { Navbar } from "@/components/navbar";
import { Header } from "@/app/_components/header";
import { Badge } from "@/components/ui/badge";

import { email } from "@/types";
import { Device, ROLE } from "@prisma/client";

export default async function DevicePage({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const session = await verifySession();
  const role = session.role as ROLE;

  const device = (await readUnique(Number(params.id), "device")) as Device;
  const ownerEmail = (await readUnique(device.ownerId, "user", "email")) as string;
  const users = (await readMany("users", "email")) as email[];

  return (
    <>
      <Navbar>
        <Actions
          role={role}
          device={device}
          ownerEmail={ownerEmail}
          users={users}
        />
      </Navbar>
      <Header title={device.deviceName}>
        <div className="flex gap-1">
          <Badge variant={device.status}>{device.status.toLowerCase()}</Badge>
          <Badge variant={device.state}>{device.state.toLowerCase()}</Badge>
        </div>
      </Header>
      {role !== ROLE.ADMIN ? (
        <div className="mt-[84px] border-t">
          <GeneralTab role={role} device={device} />
        </div>
      ) : (
        <DeviceTabs role={role} device={device} />
      )}
    </>
  );
}
