"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Devices, SetDevices, Fetch } from "@/types";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/typography";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DevicesTableProps {
  title: string;
  searchValue: string;
  devicesList: Devices;
  setDevicesList: SetDevices;
  fetchList: Fetch["fetchList"];
}

export const DevicesTable = ({
  title,
  searchValue,
  devicesList,
  setDevicesList,
  fetchList,
}: DevicesTableProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/devices/device");
  };

  useEffect(() => {
    const AllDevices = async () => {
      const devicesList = await fetchList(searchValue);
      if (typeof setDevicesList === "function") {
        setDevicesList(devicesList);
      }
    };
    AllDevices();

    const interval = setInterval(AllDevices, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [searchValue, fetchList ,setDevicesList]);

  return (
    <Card className="mt-8">
      <CardContent className="pt-3 pb-3">
        <Heading variant="h3" className="mb-4 mt-4 w-full">
          {title}
        </Heading>
        <Table>
          <TableHeader>
            <TableRow>
              {header.map((item, i) => (
                <TableHead
                  key={i}
                  className={cn(
                    "text-center",
                    i === 0 && "text-left pl-0",
                    i === header.length - 1 && "text-right pr-0"
                  )}
                >
                  {Object.values(item)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {devicesList.map((device) => (
              <TableRow key={device.id} onClick={handleClick}>
                <TableCell className="text-left pl-0">{device.deviceName}</TableCell>
                <TableCell className="text-center">{device.streetAddress}</TableCell>
                <TableCell className="text-center">{device.city}</TableCell>
                <TableCell className="text-center">{device.country}</TableCell>
                <TableCell className="text-center">{device.model}</TableCell>
                <TableCell className="text-center">{device.owner}</TableCell>
                <TableCell className="text-center">{device.SIM}</TableCell>
                <TableCell className="text-right pr-0">{device.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const header = [
  { deviceName: "Device Name" },
  { streetAddress: "Street address" },
  { city: "City" },
  { country: "Country" },
  { model: "Model" },
  { owner: "Owner" },
  { SIM: "SIM" },
  { status: "Status" },
];
