"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Calendar } from "lucide-react";

import { DisableDevice } from "./disable-device";
import { Heading, Paragraph } from "@/components/typography";
import { Card, CardContent } from "@/components/card";

import { Device } from "@prisma/client";

export function Disable({ device }: { device: Device }) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <Card className="-mb-12">
      <CardContent className="flex flex-row justify-between items-end mb-0">
        <div className="flex flex-col gap-1 mr-4">
          <div className="flex gap-2">
            <Heading variant="h3">Disable access</Heading>
            <Calendar size={16} />
          </div>
          {device.disabledFrom ? (
            <Paragraph variant="base-thin">
              Device will be disabled from{" "}
              <span className="text-foreground">
                {`${device.disabledFrom.getDate()} ${device.disabledFrom.toLocaleString(
                  "en-US",
                  { month: "long" }
                )} ${device.disabledFrom.getFullYear()}`}
              </span>{" "}
              to{" "}
              <span className="text-foreground">{`${device.disabledTo?.getDate()} ${device.disabledTo?.toLocaleString(
                "en-US",
                { month: "long" }
              )} ${device.disabledTo?.getFullYear()}`}</span>
            </Paragraph>
          ) : (
            <Paragraph variant="base-thin">
              Disable device in the specified time period
            </Paragraph>
          )}
        </div>
        <DisableDevice
          device={device}
          dateRange={dateRange}
          setDateRange={setDateRange}
          disabledFrom={device?.disabledFrom}
          />
      </CardContent>
    </Card>
  );
}
