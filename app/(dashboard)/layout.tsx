"use server";

import { fetchUserEmail } from "@/app/api/neon/fetchUserEmail";
import { Sidebar } from "@/app/_components/sidebar";
import { verifySession } from "@/lib/data-access-layer";
import { fetchNotifications } from "@/app/api/neon/fetch-notifications";
import { Assistant } from "@/app/_components/assistant";
import { cn } from "@/lib/utils";
import { Notification } from "@prisma/client";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await verifySession();
  const ownerId = Number(session?.userId);
  const role = String(session?.role);
  const email = await fetchUserEmail(ownerId);

  const notifications = (await fetchNotifications(ownerId)) as Notification[];

  return (
    <div
      className={cn(
        "relative min-h-screen flex mx-auto xl:max-w-[1280px] 2xl:max-w-[1536px]",
        "scrollbar max-h-[100vh] overflow-y-scroll scrollbar-w-2 scrollbar-h-2",
        "scrollbar-track-card-background scrollbar-thumb-rounded-full scrollbar-thumb-muted"
      )}
    >
      <Sidebar role={role} email={email} notifications={notifications} />
      <div className="flex flex-col w-full px-6 border-r-[1px] border-border">
        {children}
      </div>
      {/* <Assistant /> */}
    </div>
  );
}

export default DashboardLayout;
