"use client";

import Link from "next/link";

import { Edit } from "./edit";
import { Item } from "@/components/item";
import { Heading } from "@/components/typography";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/card";

import { Device, ROLE } from "@prisma/client";
import { email } from "@/types";

export function DetailsCard({
  device,
  role,
  ownerEmail,
  ownerName,
  users
}: {
  role: ROLE;
  device: Device;
  ownerEmail: string;
  ownerName: string;
  users: email[];
}) {
  return (
    <Card className="col-span-1 h-min">
      <CardHeader>
        <Heading variant="h3">Details</Heading>
      </CardHeader>
      <CardContent className="mb-0">
        <Item title="Name" value={device.deviceName} />
        <Item title="Owner">
          <Link
            href={`/users/${device.ownerId}`}
            className="text-sm leading-snug font-medium text-foreground underline"
          >
            {ownerName}
          </Link>
        </Item>
        <Item title="Address" value={device.streetAddress} />
        <Item title="City" value={device.city} />
        <Item title="Country" value={device.country} />
        <Item title="Model" value={device.model} />
        <Item title="SIM" value={device.SIM} />
      </CardContent>
      {role === ROLE.ADMIN && (
        <CardFooter className="justify-end gap-2">
          <Edit device={device} ownerEmail={ownerEmail} users={users}/>
        </CardFooter>
      )}
    </Card>
  );
}
