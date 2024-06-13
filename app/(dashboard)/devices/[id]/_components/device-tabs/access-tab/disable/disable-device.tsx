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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DisableDevice({
  device,
  disabledFrom,
  children,
}: {
  device: Device;
  disabledFrom: Date | null;
  children?: React.ReactNode;
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const router = useRouter();

  return (
    <div className="flex flex-col xs:flex-row gap-2">
      {children}
      <>
        <div className="xs:hidden">
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <Button size="sm" className="w-full">
                {disabledFrom ? "Change time period" : "Disable"}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-fit h-[100vh]">
              <SheetHeader className="text-left mb-6">
                <SheetTitle>Disable device</SheetTitle>
              </SheetHeader>
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
              />
              <div className="flex flex-col mt-12">
                <SheetClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </SheetClose>
                <Button
                  onClick={() => {
                    update(
                      device.id,
                      "device",
                      "disabledFrom",
                      dateRange?.from as Date
                    )
                      .then(() =>
                        update(
                          device.id,
                          "device",
                          "disabledTo",
                          dateRange?.to as Date
                        )
                      )
                      .then(() => {
                        toast.success("Time period set successfully!");
                        setOpenSheet(false);
                      })
                      .then(() => router.refresh());
                  }}
                >
                  Disable access
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden xs:block">
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
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
                    update(
                      device.id,
                      "device",
                      "disabledFrom",
                      dateRange?.from as Date
                    )
                      .then(() =>
                        update(
                          device.id,
                          "device",
                          "disabledTo",
                          dateRange?.to as Date
                        )
                      )
                      .then(() => {
                        toast.success("Time period set successfully!");
                        setOpenDialog(false);
                      })
                      .then(() => router.refresh());
                  }}
                >
                  Disable
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </>
    </div>
  );
}
