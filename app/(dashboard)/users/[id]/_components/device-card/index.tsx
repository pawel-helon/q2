"use server";

import { Card, CardContent, CardHeader } from "@/components/card";
import { Heading, Paragraph } from "@/components/typography";
import { user } from "@/types";
import { Item } from "./item";
import { fetchDevice } from "@/app/actions/users/find-device";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export async function DeviceCard({ user }: { user: user | null }) {
  const device = await fetchDevice(user!.id);

  const status = device[0].status as "ACTIVE" | "INACTIVE";
  const state = device[0].state as "OPENED" | "CLOSED";

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
            <div className="w-full flex justify-between">
              <Paragraph variant="base-thin">Status</Paragraph>
              <Badge variant={status}>{device[0].status.toLowerCase()}</Badge>
            </div>
            <div className="w-full flex justify-between">
              <Paragraph variant="base-thin">State</Paragraph>
              <Badge variant={state}>{device[0].state.toLowerCase()}</Badge>
            </div>
            <Item title="SIM" value={device[0].SIM} />
          </CardContent>
        </Card>
      ) : (
        <Card className={cn("", "col-span-1 relative")}>
          <CardHeader>
            <Heading variant="h3">Device</Heading>
          </CardHeader>
          <CardContent className="h-[180px] justify-center items-center">
            <p className="absolute top-1/2 text-center text-xs text-white px-8">
              No device has been assigned yet.
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
