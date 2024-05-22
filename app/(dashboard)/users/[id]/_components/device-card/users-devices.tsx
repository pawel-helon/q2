"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { Item } from "@/components/item";

import { Heading, Paragraph } from "@/components/typography";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { device } from "@/types";
import { STATE, STATUS } from "@prisma/client";

export function UsersDevices({ devices }: { devices: device[] }) {
  const [item, setItem] = useState(0);

  const status = devices[item]?.status as STATUS;
  const state = devices[item]?.state as STATE;

  return (
    <Card key={devices[item].id} className="col-span-1">
      <CardHeader className="flex-row gap-2 justify-between items-center">
        <Heading variant="h3">Device</Heading>
        {devices.length !== 1 && (
          <div className="flex items-center gap-0.5">
            <Paragraph variant="base-thick">{item + 1}</Paragraph>
            <Paragraph variant="small-thin">/{devices.length}</Paragraph>
          </div>
        )}
      </CardHeader>
      <CardContent className="mb-0">
        <Item title="Name">
          <Link
            href={`/devices/${devices[item].id}`}
            className="text-sm leading-snug font-medium text-foreground underline"
          >
            {devices[item].deviceName}
          </Link>
        </Item>
        <Item title="Model" value={devices[item].model} />
        <Item title="Status">
          <Badge variant={status}>{devices[item].status.toLowerCase()}</Badge>
        </Item>
        <Item title="State">
          <Badge variant={state}>{devices[item].state.toLowerCase()}</Badge>
        </Item>
        <Item title="SIM" value={devices[item].SIM} />
      </CardContent>
      {devices.length !== 1 && (
        <CardFooter className="justify-end gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setItem(item - 1 >= 0 ? item - 1 : devices.length - 1)
            }
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setItem(item + 1 < devices.length ? item + 1 : 0)}
          >
            <ChevronRight />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
