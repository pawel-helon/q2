"use server";

import { verifySession } from "@/lib/data-access-layer";
import {
  readUnique,
  readMany,
  readUsersWithAccess,
  readManyIds,
} from "@/lib/data/read";

import { DeviceTabs } from "./_components/device-tabs";
import { GeneralTab } from "./_components/device-tabs/general-tab";
import { Header } from "./_components/header";
import { Tooltip } from "@/components/tooltip";
import { Actions } from "./_components/actions";
import { ActionsMobile } from "./_components/mobile/actions";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";

import { email, id } from "@/types";
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
  const userId = session.userId as number;

  const device = (await readUnique(Number(params.id), "device")) as Device;
  const ownerEmail = (await readUnique(device.ownerId, "user", "email")) as string;

  const users = (await readMany("users", "email")) as email[];
  const usersWithAccess = (await readUsersWithAccess(Number(params.id))) as User[];

  const devices = (await readManyIds("devices")) as id[];

  console.log(users)

  return (
    <>
      <Navbar>
        <Actions
          role={role}
          userId={userId}
          device={device}
          ownerEmail={ownerEmail}
          users={users}
        />
      </Navbar>
      <Header
        title={device.deviceName}
        deviceId={device.id}
        devices={devices}
        device={device}
      >
        <Tooltip title="Device status">
          <Badge variant={device.status}>{device.status.toLowerCase()}</Badge>
        </Tooltip>
        <Tooltip title="Device state">
          <Badge variant={device.state}>{device.state.toLowerCase()}</Badge>
        </Tooltip>
      </Header>
      {role === ROLE.ENDUSER ? (
        <div className="border-t w-full my-12 xs:mt-[7.5rem]">
          <GeneralTab role={role} device={device} />
        </div>
      ) : (
        <DeviceTabs role={role} device={device} users={usersWithAccess} />
      )}
      <ActionsMobile
        role={role}
        userId={userId}
        device={device}
        ownerEmail={ownerEmail}
        users={users}
      />
    </>
  );
}
