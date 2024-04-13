"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import {
  fetchActiveDevices,
  fetchInactiveDevices,
} from "@/app/api/search-devices/route";
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
import { Heading } from "@/components/typography";

interface GroupedDevicesTablesProps {
  searchValue: string;
  activeDevices: {
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
  setActiveDevices: (
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
  inactiveDevices: {
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
  setInactiveDevices: (
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

export const GroupedDevicesTables = ({
  searchValue,
  activeDevices,
  setActiveDevices,
  inactiveDevices,
  setInactiveDevices,
}: GroupedDevicesTablesProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/devices/device");
  };

  useEffect(() => {
    const ActiveDevices = async () => {
      const activeDevices = await fetchActiveDevices(searchValue);
      if (typeof setActiveDevices === "function") {
        setActiveDevices(activeDevices);
      }
    };
    ActiveDevices();

    const interval = setInterval(ActiveDevices, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [searchValue, setActiveDevices]);

  useEffect(() => {
    const InactiveDevices = async () => {
      const inactiveDevices = await fetchInactiveDevices(searchValue);
      if (typeof setInactiveDevices === "function") {
        setInactiveDevices(inactiveDevices);
      }
    };
    InactiveDevices();

    const interval = setInterval(InactiveDevices, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [searchValue, setInactiveDevices]);

  return (
    <div className="flex flex-col">
      <Card className="mt-8">
        <CardContent className="pt-3 pb-3">
          <Heading variant="h3" className="mb-4 mt-4 w-full">
            Active devices
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
              {activeDevices.map((device) => (
                <TableRow key={device.id} onClick={handleClick}>
                  <TableCell className="text-left pl-0">
                    {device.deviceName}
                  </TableCell>
                  <TableCell className="text-center">
                    {device.streetAddress}
                  </TableCell>
                  <TableCell className="text-center">{device.city}</TableCell>
                  <TableCell className="text-center">
                    {device.country}
                  </TableCell>
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
      <Card className="mt-8">
        <CardContent className="pt-3 pb-3">
          <Heading variant="h3" className="mb-4 mt-4">
            Inactive devices
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
              {inactiveDevices.map((device) => (
                <TableRow key={device.id} onClick={handleClick}>
                  <TableCell className="text-left pl-0">
                    {device.deviceName}
                  </TableCell>
                  <TableCell className="text-center">
                    {device.streetAddress}
                  </TableCell>
                  <TableCell className="text-center">{device.city}</TableCell>
                  <TableCell className="text-center">
                    {device.country}
                  </TableCell>
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
    </div>
  );
};
