import { Toaster } from "sonner";

import { fetchUserEmail } from "../api/neon/fetchUserEmail";
import { Assistant } from "../_components/assistant";
import { Sidebar } from "../_components/sidebar";
import { verifySession } from "@/lib/data-access-layer";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const session = await verifySession();
  const ownerId = Number(session?.userId);

  const email = await fetchUserEmail(ownerId);

  return (
    <div
      className={cn(
        "relative min-h-screen flex mx-auto xl:max-w-[1280px] 2xl:max-w-[1536px]",
        "scrollbar scrollbar-thumb-muted scrollbar-track-background h-32 overflow-y-scroll"
      )}
    >
      <Sidebar email={email}/>
      <div className="flex flex-col w-full px-6 border-r-[1px] border-border">
        {children}
      </div>
      <Assistant />
      <Toaster
        position="top-center"
        toastOptions={{
          className:
            "bg-background p-4 border-border text-xs font-bold text-white p-2 rounded-lg shadow-black shadow-lg",
        }}
      />
    </div>
  );
};

export default DashboardLayout;
