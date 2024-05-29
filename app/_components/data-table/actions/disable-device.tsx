"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dispatch, SetStateAction, useState } from "react";
import { DateRange } from "react-day-picker";
import { Heading } from "@/components/typography";
import { toast } from "sonner";

export function DisableDevice({
  dateRange,
  setDateRange,
}: {
  dateRange: DateRange | undefined;
  setDateRange: Dispatch<SetStateAction<DateRange | undefined>>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Disable</Button>
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
              toast.success("Time period set successfully!");
              setOpen(false);
            }}
          >
            Disable
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
