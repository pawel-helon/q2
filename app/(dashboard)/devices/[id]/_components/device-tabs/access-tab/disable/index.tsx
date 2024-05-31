"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";

import { DisableDevice } from "./disable-device";
import { Heading, Paragraph } from "@/components/typography";
import { Card, CardContent } from "@/components/card";

export function Disable() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <Card className="-mb-12">
      <CardContent className="flex flex-row justify-between items-end mb-0">
        <div className="flex flex-col gap-1 mr-4">
          <Heading variant="h3">Disable access</Heading>
          {dateRange ? (
            <Paragraph variant="base-thin">
              Device will be disabled from{" "}
              {`${dateRange.from?.getDate()} ${dateRange.from?.toLocaleString(
                "en-US",
                { month: "long" }
              )} ${dateRange.from?.getFullYear()} to ${dateRange.to?.getDate()} ${dateRange.to?.toLocaleString(
                "en-US",
                { month: "long" }
              )} ${dateRange.to?.getFullYear()}`}
            </Paragraph>
          ) : (
            <Paragraph variant="base-thin">
              Disable access in a given time period
            </Paragraph>
          )}
        </div>
        <DisableDevice dateRange={dateRange} setDateRange={setDateRange} />
      </CardContent>
    </Card>
  );
}
