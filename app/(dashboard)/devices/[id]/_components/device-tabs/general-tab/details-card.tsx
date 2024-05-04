"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "@/components/typography";
import { $Enums } from "@prisma/client";

interface DetailsCardProps {
  role: unknown;
  device: {
    id: number;
    deviceName: string;
    streetAddress: string;
    city: string;
    country: string;
    model: string;
    SIM: string;
    status: $Enums.STATUS;
    state: $Enums.STATE;
    ownerId: number;
  } | null;
}

export const DetailsCard = ({ role, device }: DetailsCardProps) => {
  const [isEditDetailsDialogOpen, setIsEditDetailsDialogOpen] = useState(false);

  return (
    <div className="border border-border shadow-black shadow-2xl rounded-lg">
      <Card className="flex flex-col col-span-1 bg-transparent border-none">
        <CardHeader className="mb-4 p-4">
          <Heading variant="h3">Details</Heading>
        </CardHeader>
        <CardContent className="grow mb-4 p-4">
          <ul className="flex flex-col gap-3">
            <li className="w-full flex justify-between">
              <Paragraph variant="base-thin">Device Name</Paragraph>
              <Paragraph variant="base-thick" className="text-right">
                {device?.deviceName}
              </Paragraph>
            </li>
            <li className="w-full flex justify-between">
              <Paragraph variant="base-thin">Street address</Paragraph>
              <Paragraph variant="base-thick" className="text-right">
                {device?.streetAddress}
              </Paragraph>
            </li>
            <li className="w-full flex justify-between">
              <Paragraph variant="base-thin">City</Paragraph>
              <Paragraph variant="base-thick" className="text-right">
                {device?.city}
              </Paragraph>
            </li>
            <li className="w-full flex justify-between">
              <Paragraph variant="base-thin">Country</Paragraph>
              <Paragraph variant="base-thick" className="text-right">
                {device?.country}
              </Paragraph>
            </li>
            <li className="w-full flex justify-between">
              <Paragraph variant="base-thin">Model</Paragraph>
              <Paragraph variant="base-thick" className="text-right">
                {device?.model}
              </Paragraph>
            </li>
            <li className="w-full flex justify-between">
              <Paragraph variant="base-thin">SIM</Paragraph>
              <Paragraph variant="base-thick" className="text-right">
                {device?.SIM}
              </Paragraph>
            </li>
          </ul>
        </CardContent>
        {role === "ADMIN" && (
          <CardFooter className="p-4">
            <div className="w-full flex justify-end">
              <Button variant="secondary">Edit</Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

const details = [
  { address: "123 Main Street" },
  { city: "New York" },
  { country: "USA" },
  { model: "NS1928" },
  { SIM: "555-1234" },
  { owner: "John Doe" },
];
