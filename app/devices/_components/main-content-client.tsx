"use client";

import { useEffect, useState } from "react";
import { findDevices } from "../../api/find-devices/route";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const MainContentClient = () => {
  const [devices, setDevices] = useState<
    {
      id: number;
      streetAddress: string;
      city: string;
      country: string;
      model: string;
      owner: string | null;
      SIM: string;
    }[]
  >([]);

  useEffect(() => {
    const updatedDevices = async () => {
      const devices = await findDevices();
      setDevices(devices);
    };
    updatedDevices();

    const interval = setInterval(updatedDevices, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const router = useRouter();
  const handleClick = () => {
    router.push("/devices/device");
  }

  return (
    <Card className="mt-12">
      <CardContent className="pt-3 pb-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left pl-0">Street address</TableHead>
              <TableHead className="text-center">City</TableHead>
              <TableHead className="text-center">Country</TableHead>
              <TableHead className="text-center">Model</TableHead>
              <TableHead className="text-center">Owner</TableHead>
              <TableHead className="text-right pr-0">SIM</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.id} onClick={handleClick}>
                <TableCell className="text-left pl-0">
                  {device.streetAddress}
                </TableCell>
                <TableCell className="text-center">{device.city}</TableCell>
                <TableCell className="text-center">{device.country}</TableCell>
                <TableCell className="text-center">{device.model}</TableCell>
                <TableCell className="text-center">{device.owner}</TableCell>
                <TableCell className="text-right pr-0">{device.SIM}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
