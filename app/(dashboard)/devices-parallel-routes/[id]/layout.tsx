"use server";

import { verifySession } from "@/lib/data-access-layer";
import {
  readUnique,
  readMany,
  readUsersWithAccess,
  readManyIds,
} from "@/lib/data/read";

import { email, id } from "@/types";
import { Device, ROLE, User } from "@prisma/client";
import { Navbar } from "../_components/navbar";
import { Actions } from "../../devices/[id]/_components/actions";
import { Header } from "../../devices/[id]/_components/header";
import { Tooltip } from "@/components/tooltip";
import { Badge } from "@/components/ui/badge";

export default async function DeviceLayout({
  params,
  endUser,
  notEndUser,
}: {
  params: {
    id: number;
  };
  endUser: React.ReactNode;
  notEndUser: React.ReactNode;
}) {
  const session = await verifySession();
  const role = session.role as ROLE;
  const userId = session.userId as number;

  const device = (await readUnique(Number(params.id), "device")) as Device;
  const ownerEmail = (await readUnique(
    device.ownerId,
    "user",
    "email"
  )) as string;

  const users = (await readMany("users", "email")) as email[];
  const usersWithAccess = (await readUsersWithAccess(Number(params.id))) as User[];

  const devices = (await readManyIds("devices")) as id[];

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
      {role === ROLE.ENDUSER ? endUser : notEndUser}
    </>
  );
}
