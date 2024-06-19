"use server";

import { readUnique, readNotificationsForUser } from "@/lib/data/read";

import { Sidebar } from "@/app/_components/sidebar";
import { verifySession } from "@/lib/data-access-layer";

import { Notification, ROLE } from "@prisma/client";
import { Account } from "../_components/mobile/account";
import { Nav } from "../_components/mobile/nav";
import { cn } from "@/lib/utils";
import { ContentDesktop } from "../_components/content-desktop";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();
  const userId = Number(session.userId);
  const role = session.role as ROLE;

  const email = (await readUnique(userId, "user", "email")) as string;
  const notifications = (await readNotificationsForUser(userId)) as Notification[];
  const anyNotifications = Boolean(notifications.length)

  return (
    <>
      <div className="xs:hidden relative px-3 min-h-[85vh]">
        <div className={cn(
          "z-50 fixed top-0 left-3 right-3 bg-background/80 flex justify-between pt-3 pb-2",
          role !== ROLE.ADMIN && "justify-end"
        )}>
          {role === ROLE.ADMIN && <Nav />}
          <Account email={email} anyNotifications={anyNotifications}/>
        </div>
        {children}
      </div>
      <ContentDesktop role={role} email={email} notifications={notifications}>
        {children}
      </ContentDesktop>
    </>
  );
}
