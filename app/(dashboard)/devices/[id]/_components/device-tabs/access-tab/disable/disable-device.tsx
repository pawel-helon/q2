"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DateRange } from "react-day-picker";
import { toast } from "sonner";

import { update } from "@/lib/data/update";

import { Calendar } from "@/components/ui/calendar";
import { Heading } from "@/components/typography";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Device } from "@prisma/client";

export function DisableDevice({
  device,
  disabledFrom,
}: {
  device: Device;
  disabledFrom: Date | null;
}) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          {disabledFrom ? "Change time period" : "Disable"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <Heading variant="h3" className="mb-8">
            Disable device
          </Heading>
        </DialogHeader>
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
        />
        <DialogFooter className="justify-end mt-8">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button
            onClick={() => {
              update(device.id, "device", "disabledFrom", dateRange?.from as Date)
                .then(() =>
                  update(device.id, "device", "disabledTo", dateRange?.to as Date))
                .then(() => {
                  toast.success("Time period set successfully!");
                  setOpen(false)})
                .then(() => router.refresh());
            }}
          >
            Disable
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
