"use server";

import { Card, CardContent, CardHeader } from "@/components/card";
import { Heading } from "@/components/typography";
import { user } from "@/types";
import { Item } from "./item";
import { fetchDevice } from "@/app/actions/users/find-device";

interface DeviceCardProps {
  user: user | null;
}

export async function DeviceCard({ user }: DeviceCardProps) {
  const device = await fetchDevice(user!.id);

  return (
    <>
      {device.length > 0 ? (
        <Card className="col-span-1">
          <CardHeader>
            <Heading variant="h3">Device</Heading>
          </CardHeader>
          <CardContent>
            <Item title="Name" value={device[0].deviceName} />
            <Item title="Model" value={device[0].model} />
            <Item title="Status" value={device[0].status} />
            <Item title="State" value={device[0].state} />
            <Item title="SIM" value={device[0].SIM} />
          </CardContent>
        </Card>
      ) : (
        <Card className="relative">
          <CardHeader>
            <Heading variant="h3">Device</Heading>
          </CardHeader>
          <CardContent className="h-[240px] justify-center items-center">
            <p className="absolute top-1/2 text-center text-xs text-white px-8">
              No device has been assigned yet.
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
