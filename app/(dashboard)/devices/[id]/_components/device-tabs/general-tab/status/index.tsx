"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heading } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { StatusTable } from "./status-table";

import { columns, data } from "./columns";

export const Status = () => {
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible
      className="col-span-2 flex flex-col gap-4"
    >
      <AccordionItem
        value="item-1"
        className="border border-border shadow-black shadow-2xl rounded-lg"
      >
        <AccordionTrigger className="p-4">
          <Heading variant="h3">Current status</Heading>
        </AccordionTrigger>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        className="border border-border shadow-black shadow-2xl rounded-lg"
      >
        <AccordionTrigger className="p-4">
          <Heading variant="h3">Status log</Heading>
        </AccordionTrigger>
        <AccordionContent>
          <StatusTable data={data} columns={columns} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
