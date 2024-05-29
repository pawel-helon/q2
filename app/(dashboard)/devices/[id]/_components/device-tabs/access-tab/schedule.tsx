"use client";

import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/card";
import { Heading } from "@/components/typography";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Schedule({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>();

  return (
    <div className="h-min">
      <Card className="min-h">
        <CardHeader>
          <Heading variant="h3">Schedule</Heading>
        </CardHeader>
        <CardContent className="mb-0">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
          <div className="flex justify-end">
            <Button variant="secondary" size="sm" onClick={() => console.log(date)}>
              Disable access
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
