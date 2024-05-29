"use server";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/card";
import { Heading } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { readMany } from "@/lib/data/read";
import { User } from "@prisma/client";

export async function Users() {
  const users = (await readMany("users")) as User[];

  return (
    <Card className="flex-auto">
      <CardHeader>
        <div className="w-full flex justify-between items-center">
          <Heading variant="h3">Users</Heading>
          {/* <Button variant="ghost" size="sm">
            Remove
          </Button> */}
        </div>
      </CardHeader>
      <CardContent className="mb-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="w-full flex justify-end">
          <Button variant="secondary" size="sm">
            Add user
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
