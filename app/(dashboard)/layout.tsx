"use server";

import { readUnique, readNotificationsForUser } from "@/lib/data/read";

import { Sidebar } from "@/app/_components/sidebar";
import { verifySession } from "@/lib/data-access-layer";

import { Notification, ROLE } from "@prisma/client";
import { Account } from "../_components/mobile/account";
import { Nav } from "../_components/mobile/nav";
import { cn } from "@/lib/utils";

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
      <div className="hidden xs:flex relative min-h-screen mx-auto xl:max-w-screen-2xl 2xl:max-w-screen-2xl scrollbar max-h-[100vh] overflow-y-scroll scrollbar-w-2 scrollbar-h-2 scrollbar-track-card-background scrollbar-thumb-rounded-full scrollbar-thumb-muted">
        <Sidebar role={role} email={email} notifications={notifications} />
        <div className="flex flex-col main-content-width px-6 border-r-[1px] border-border">
          {children}
        </div>
      </div>
    </>
  );
}
