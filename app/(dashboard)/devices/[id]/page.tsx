import { fetchDevice } from "@/app/api/neon/find-device";
import { Header } from "@/app/_components/header";
import { Badge } from "@/components/ui/badge";
import { DeviceTabs } from "./_components/device-tabs";
import { GeneralTab } from "./_components/device-tabs/general-tab";
import { verifySession } from "@/lib/data-access-layer";
import { Navbar } from "@/components/navbar";
import { Actions } from "./_components/actions";

interface DevicePageProps {
  params: {
    id: number;
  };
}

async function DevicePage({ params }: DevicePageProps) {
  const session = await verifySession();
  const role = session?.role;

  const id = Number(params.id);
  const device = await fetchDevice(id);
  const deviceName = device?.deviceName;
  const status = device?.status.toLowerCase();

  return (
    <div>
      <Navbar>
        <Actions device={device} role={role}/>
      </Navbar>
      <Header title={deviceName}>
        <Badge variant={status === "active" ? "success" : "destructive"}>
          {status}
        </Badge>
      </Header>
      {role !== "ADMIN" ? (
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
