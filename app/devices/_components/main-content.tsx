"use server"

import { db } from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const MainContent = async () => {
  const devices = await db.device.findMany()

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
                <TableRow key={device.id}>
                  <TableCell className="text-left pl-0">{device.streetAddress}</TableCell>
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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
