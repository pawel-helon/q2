"use server";

import { readNotificationsForUser } from "@/lib/data/read";
import { verifySession } from "@/lib/data-access-layer";
import { columns } from "./_components/data-table/columns";

import { DataTable } from "@/app/_components/data-table";
import { Navbar } from "@/components/navbar";
import { Heading } from "@/components/typography";

import { Notification } from "@prisma/client";

export default async function NotificationsPage() {
  const session = await verifySession();

  const userId = Number(session.userId);
  const notifications = (await readNotificationsForUser(
    userId
  )) as Notification[];

  return (
    <>
      <Navbar className="h-[84px]"/>
      <div className="mt-16 pt-8 xs:mt-12 xs:pt-0">
        <Heading variant="h1">Notifications</Heading>
      </div>
      <DataTable columns={columns} data={notifications} />
    </>
  );
}
