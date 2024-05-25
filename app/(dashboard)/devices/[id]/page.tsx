"use server";

import { fetchDevice } from "@/app/api/neon/find-device";
import { verifySession } from "@/lib/data-access-layer";

import { DeviceTabs } from "./_components/device-tabs";
import { GeneralTab } from "./_components/device-tabs/general-tab";
import { Actions } from "./_components/actions";
import { Navbar } from "@/components/navbar";
import { Header } from "@/app/_components/header";
import { Badge } from "@/components/ui/badge";

import { fetchUsersEmails } from "@/app/api/neon";
import { fetchOwner } from "@/app/api/neon/fetch-owner";

import { emails } from "@/types";
import { Device, ROLE, User } from "@prisma/client";

export default async function DevicePage({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const session = await verifySession();
  const role = session.role as ROLE;
  
  const deviceId = Number(params.id);
  
  const device = (await fetchDevice(deviceId)) as Device;
  const users = (await fetchUsersEmails()) as emails;
  const owner = (await fetchOwner(device.ownerId)) as User;

  return (
    <>
      <Navbar>
        <Actions
          device={device}
          role={role}
          users={users}
          ownerEmail={owner.email}
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
          <GeneralTab device={device} role={role} />
        </div>
      ) : (
        <DeviceTabs role={role} device={device} />
      )}
    </>
  );
}
