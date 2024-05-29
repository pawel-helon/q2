"use client";

import { DisableDevice } from "@/app/_components/data-table/actions/disable-device";
import { Card, CardContent } from "@/components/card";
import { Heading, Paragraph } from "@/components/typography";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export function Disable() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <Card className="-mb-12">
      <CardContent className="mb-0">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1 mr-4">
            <Heading variant="h3">Disable access</Heading>
            {dateRange ? (
              <>
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
              </>
            ) : (
              <>
                <Paragraph variant="base-thin">
                  Disable access in a given time period
                </Paragraph>
              </>
            )}
          </div>
          <DisableDevice dateRange={dateRange} setDateRange={setDateRange} />
        </div>
      </CardContent>
    </Card>
  );
}
