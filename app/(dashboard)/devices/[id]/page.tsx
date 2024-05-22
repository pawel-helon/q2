"use server"

import { fetchDevice } from "@/app/api/neon/find-device";
import { verifySession } from "@/lib/data-access-layer";

import { DeviceTabs } from "./_components/device-tabs";
import { GeneralTab } from "./_components/device-tabs/general-tab";
import { Actions } from "./_components/actions";
import { Navbar } from "@/components/navbar";
import { Header } from "@/app/_components/header";
import { Badge } from "@/components/ui/badge";

import { device } from "@/types";
import { ROLE } from "@prisma/client";

export default async function DevicePage({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const session = await verifySession();
  const role = session.role as ROLE;
  const id = Number(params.id);
  const device = await fetchDevice(id) as device

  return (
    <>
      <Navbar>
        <Actions device={device} role={role} />
      </Navbar>
      <Header title={device.deviceName}>
        <Badge variant={device.status}>
          {device.status.toLowerCase()}
        </Badge>
      </Header>
      {role !== "ADMIN" ? (
        <div className="mt-[84px] border-t">
          <GeneralTab device={device} role={role} />
        </div>
      ) : (
        <DeviceTabs role={role} device={device} />
      )}
    </>
  );
}
