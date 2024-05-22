"use server";

import { Card, CardContent, CardHeader } from "@/components/card";
import { Heading } from "@/components/typography";
import { user } from "@/types";
import { fetchDevice } from "@/app/actions/users/find-device";
import { cn } from "@/lib/utils";
import { UsersDevices } from "./users-devices";

export async function DeviceCard({ user }: { user: user | null }) {
  const devices = await fetchDevice(user!.id);

  return (
    <>
      {devices.length > 0 ? (
        <UsersDevices devices={devices} />
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
