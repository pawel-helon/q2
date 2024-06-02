"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";

import { update } from "@/lib/data/update";

import { DisableDevice } from "./disable-device";
import { Heading, Paragraph } from "@/components/typography";
import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/ui/button";

import { Device } from "@prisma/client";

export function Disable({ device }: { device: Device }) {
  const router = useRouter();

  return (
    <Card className="-mb-12">
      <CardContent className="flex flex-row justify-between items-end mb-0">
        <div className="flex flex-col gap-1 mr-4">
          <div className="flex gap-2">
            <Heading variant="h3">Disable access</Heading>
            <Calendar size={16} />
          </div>
          {device.disabledFrom ? (
            <div className="flex flex-col items-start md:flex-row md:gap-2 md:items-center">
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
              <Button
                onClick={() => {
                  update(device.id, "device", "disabledFrom", null)
                    .then(() => {
                      update(device.id, "device", "disabledTo", null);
                    })
                    .then(() => {
                      toast.success("Disable period has been discarded");
                    })
                    .catch(() => {
                      toast.error("Failed to discard disable period");
                    });
                  router.refresh();
                }}
                variant="link"
                size="sm"
                className="p-0"
              >
                Discard
              </Button>
            </div>
          ) : (
            <Paragraph variant="base-thin">
              Disable device in the specified time period
            </Paragraph>
          )}
        </div>
        <DisableDevice
          device={device}
          // dateRange={dateRange}
          // setDateRange={setDateRange}
          disabledFrom={device?.disabledFrom}
        />
      </CardContent>
    </Card>
  );
}
