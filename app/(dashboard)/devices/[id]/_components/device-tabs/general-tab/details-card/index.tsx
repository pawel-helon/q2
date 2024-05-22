"use client";

import Link from "next/link";

import { Edit } from "./edit";
import { Item } from "@/components/item";
import { Heading } from "@/components/typography";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/card";

import { Badge } from "@/components/ui/badge";

import { ROLE } from "@prisma/client";
import { device, owner, owners } from "@/types";

export function DetailsCard({
  device,
  role,
  owner,
  owners,
}: {
  role: ROLE;
  device: device;
  owner: owner;
  owners: owners;
}) {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex-row gap-2 justify-between items-center">
        <Heading variant="h3">Details</Heading>
        <Badge variant={device.state}>{device.state.toLowerCase()}</Badge>
      </CardHeader>
      <CardContent className="mb-0">
        <Item title="Name" value={device.deviceName} />
        <Item title="Owner">
          <Link
            href={`/users/${device.ownerId}`}
            className="text-sm leading-snug font-medium text-foreground underline"
          >
            {owner.name}
          </Link>
        </Item>
        <Item title="Address" value={device.streetAddress} />
        <Item title="City" value={device.city} />
        <Item title="Country" value={device.country} />
        <Item title="Model" value={device.model} />
        <Item title="SIM" value={device.SIM} />
      </CardContent>
      {role === "ADMIN" && (
        <CardFooter className="justify-end gap-2">
          <Edit device={device} ownerEmail={owner.email} owners={owners} />
        </CardFooter>
      )}
    </Card>
  );
}
