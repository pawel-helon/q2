"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CalendarDays } from "lucide-react";

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
      <CardContent className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-0 gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between sm:justify-start items-center sm:items-start gap-2">
            <Heading variant="h3">Disable access</Heading>
            <CalendarDays className="size-5 sm:hidden" />
          </div>
          {device.disabledFrom ? (
            <div className="flex flex-row justify-between sm:justify-start gap-2 items-center">
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
          disabledFrom={device?.disabledFrom}
        />
      </CardContent>
    </Card>
  );
}
