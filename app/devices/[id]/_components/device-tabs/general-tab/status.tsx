"use client"

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/typography";

export const Status = () => {
  const [status, setStatus] = useState(true);

  const statusLog = [
    { date: "31/03/24" },
    { time: "16:15" },
    { connection: <Badge /> },
  ];
  
  const currentStatus = [
    { a: <Badge /> },
    { b: <Badge /> },
    { c: <Badge /> },
  ];
  

  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible
      className="col-span-2 flex flex-col gap-4 border border-border shadow-black shadow-2xl rounded-lg"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Heading variant="h4">Current status</Heading>
        </AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left w-[100px]">Par. A</TableHead>
                <TableHead className="text-center">Par. B</TableHead>
                <TableHead className="text-center">Par. C</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {currentStatus.map((cell, i) => (
                    <TableCell key={i} className="justify-center text-center">
                      {Object.values(cell)}
                    </TableCell>
                  ))}
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <Heading variant="h4">Status log</Heading>
        </AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left w-[100px]">Date</TableHead>
                <TableHead className="text-center">Time</TableHead>
                <TableHead className="text-center">Connection</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            <TableRow>
                {statusLog.map((cell, i) => (
                  <TableCell key={i} className="justify-center text-center">
                    {Object.values(cell)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                {statusLog.map((cell, i) => (
                  <TableCell key={i} className="justify-center text-center">
                    {Object.values(cell)}
                  </TableCell>
                ))}
              </TableRow>
                          <TableRow>
                {statusLog.map((cell, i) => (
                  <TableCell key={i} className="justify-center text-center">
                    {Object.values(cell)}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
