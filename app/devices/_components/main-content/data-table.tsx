import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps {
  devices: {
    id: number;
    streetAddress: string;
    city: string;
    country: string;
    model: string;
    owner: string | null;
    SIM: string;
  }[];
  handleClick: () => void;
}

export const DataTable = ({ devices, handleClick }: DataTableProps) => {
  return (
    <Card className="mt-8">
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
                  <TableCell className="text-center">
                    {device.country}
                  </TableCell>
                  <TableCell className="text-center">{device.model}</TableCell>
                  <TableCell className="text-center">{device.owner}</TableCell>
                  <TableCell className="text-right pr-0">
                    {device.SIM}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
  )
}
