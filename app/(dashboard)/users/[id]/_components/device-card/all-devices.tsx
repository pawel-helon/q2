"use client";

import { Card, CardContent, CardHeader } from "@/components/card";
import { Heading, Paragraph } from "@/components/typography";
import { Item } from "./item";
import { Badge } from "@/components/ui/badge";

import { device } from "@/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function AllDevices({ devices }: { devices: device[] }) {
  const [item, setItem] = useState(0);

  const status = devices[item]?.status as "ACTIVE" | "INACTIVE";
  const state = devices[item]?.state as "OPENED" | "CLOSED";

  return (
    <>
      <Card key={devices[item].id} className="col-span-1">
        <CardHeader>
          <div className="flex gap-2 justify-between items-center">
            <Heading variant="h3">Device</Heading>
            <Paragraph variant="base-thin">
              ({item + 1}/{devices.length})
            </Paragraph>
          </div>
        </CardHeader>
        <CardContent className="mb-0">
          <Item title="Name" value={devices[item].deviceName} />
          <Item title="Model" value={devices[item].model} />
          <div className="w-full flex justify-between">
            <Paragraph variant="base-thin">Status</Paragraph>
            <Badge variant={status}>{devices[item].status.toLowerCase()}</Badge>
          </div>
          <div className="w-full flex justify-between">
            <Paragraph variant="base-thin">State</Paragraph>
            <Badge variant={state}>{devices[item].state.toLowerCase()}</Badge>
          </div>
          <Item title="SIM" value={devices[item].SIM} />
          <div className="flex justify-end gap-1 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setItem(item - 1 >= 0 ? item - 1 : devices.length - 1)}
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
          </div>
        </CardContent>
      </Card>
    </>
  );
}
