import { fetchDevice } from "@/app/api/neon/find-device";
import { auth } from "@clerk/nextjs/server";
import { Navbar } from "./_components/navbar";
import { Header } from "@/app/_components/header";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DeviceTabs } from "./_components/device-tabs";
import { GeneralTab } from "./_components/device-tabs/general-tab";

interface DevicePageProps {
  params: {
    id: number;
  };
}

async function DevicePage({ params }: DevicePageProps) {
  const role = auth().orgRole;

  const id = Number(params.id);
  const device = await fetchDevice(id);
  const deviceName = device?.deviceName;
  const status = device?.status.toLowerCase();

  return (
    <div>
      <Navbar device={device} role={role} />
      <Header title={deviceName}>
        <Badge className={cn(status === "active" && "bg-emerald-500")}>
          {status}
        </Badge>
      </Header>
      {role === "org:member" ? (
        <div className="mt-[84px] border-t">
          <GeneralTab device={device} role={role}/>
        </div>
      ) : (
        <DeviceTabs role={role} device={device}/>
      )}
    </div>
  );
}

export default DevicePage;
