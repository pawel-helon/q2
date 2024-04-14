"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Devices, SetDevices } from "@/types";
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
import { cn } from "@/lib/utils";

interface GroupedDevicesTablesProps {
  searchValue: string;
  status: boolean;
  activeDevices: Devices;
  setActiveDevices: SetDevices;
  inactiveDevices: Devices;
  setInactiveDevices: SetDevices;
}

export const GroupedDevicesTables = ({
  searchValue,
  status,
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
                <TableHead
                  className={cn("text-center", status && "text-right pr-0")}
                >
                  SIM
                </TableHead>
                {!status ? (
                  <TableHead className="text-right pr-0">Status</TableHead>
                ) : null}
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
                  <TableCell
                    className={cn("text-center", status && "text-right pr-0")}
                  >
                    {device.SIM}
                  </TableCell>
                  {!device.status ? (
                    <TableCell className="text-right pr-0">
                      <Badge variant="outline" className="w-full">
                        {device.status}
                      </Badge>
                    </TableCell>
                  ) : null}
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
                <TableHead
                  className={cn("text-center", status && "text-right pr-0")}
                >
                  SIM
                </TableHead>
                {!status ? (
                  <TableHead className="text-right pr-0">Status</TableHead>
                ) : null}
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
                  <TableCell
                    className={cn("text-center", status && "text-right pr-0")}
                  >
                    {device.SIM}
                  </TableCell>
                  {!device.status ? (
                    <TableCell className="text-right pr-0">
                      <Badge variant="outline" className="w-full">
                        {device.status}
                      </Badge>
                    </TableCell>
                  ) : null}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
