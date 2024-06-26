"use server";

import { readDeviceByUser } from "@/lib/data/read";

import { UsersDevices } from "./users-devices";
import { Heading } from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/card";

import { User } from "@prisma/client";

export async function DeviceCard({ user }: { user: User }) {
  const devices = await readDeviceByUser(user.id);

  return (
    <>
      {devices.length > 0 ? (
        <UsersDevices devices={devices} />
      ) : (
        <Card className="col-span-1 relative">
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
