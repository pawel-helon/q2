"use server";

import { DataTable } from "@/app/_components/data-table";
import { verifySession } from "@/lib/data-access-layer";
import { readNotificationsForUser } from "@/lib/data/read";
import { Notification } from "@prisma/client";
import { columns } from "./_components/data-table/columns";
import { Navbar } from "@/components/navbar";
import { Heading } from "@/components/typography";

export default async function NotificationsPage() {
  const session = await verifySession();

  const userId = Number(session.userId);
  const notifications = (await readNotificationsForUser(
    userId
  )) as Notification[];

  return (
    <>
      <Navbar />
      <Heading variant="h1" className="mt-20 pt-8 xs:mt-12 xs:pt-0">
        Notifications
      </Heading>
      <DataTable columns={columns} data={notifications} />
    </>
  );
}
