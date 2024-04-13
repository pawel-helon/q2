"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { fetchAllDevices, searchDevices } from "@/app/api/search-devices/route";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/typography";

interface AllDevicesTableTempProps {
  searchValue: string;
  allDevices: {
    id: number;
    deviceName: string;
    streetAddress: string;
    city: string;
    country: string;
    model: string;
    owner: string | null;
    SIM: string;
    status: string;
  }[];
  setAllDevices: (
    devices: {
      id: number;
      deviceName: string;
      streetAddress: string;
      city: string;
      country: string;
      model: string;
      owner: string | null;
      SIM: string;
      status: string;
    }[]
  ) => void;
}

export const AllDevicesTableTemp = ({
  searchValue,
  allDevices,
  setAllDevices,
}: AllDevicesTableTempProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/devices/device");
  };

  useEffect(() => {
    const AllDevices = async () => {
      const allDevices = await fetchAllDevices(searchValue);
      if (typeof setAllDevices === "function") {
        setAllDevices(allDevices);
      }
    };
    AllDevices();

    const interval = setInterval(AllDevices, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [searchValue, setAllDevices]);

  return (
    <Card className="mt-8">
      <CardContent className="pt-3 pb-3">
        <Heading variant="h3" className="mb-4 mt-4 w-full">
          All devices
        </Heading>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left pl-0">Device Name</TableHead>
              <TableHead className="text-center">Street address</TableHead>
              <TableHead className="text-center">City</TableHead>
              <TableHead className="text-center">Country</TableHead>
              <TableHead className="text-center">Model</TableHead>
              <TableHead className="text-center">Owner</TableHead>
              <TableHead className="text-center">SIM</TableHead>
              <TableHead className="text-right pr-0">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allDevices.map((device) => (
              <TableRow key={device.id} onClick={handleClick}>
                <TableCell className="text-left pl-0">
                  {device.deviceName}
                </TableCell>
                <TableCell className="text-center">
                  {device.streetAddress}
                </TableCell>
                <TableCell className="text-center">{device.city}</TableCell>
                <TableCell className="text-center">{device.country}</TableCell>
                <TableCell className="text-center">{device.model}</TableCell>
                <TableCell className="text-center">{device.owner}</TableCell>
                <TableCell className="text-center">{device.SIM}</TableCell>
                <TableCell className="text-right pr-0">
                  <Badge variant="outline" className="w-full">
                    {device.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
