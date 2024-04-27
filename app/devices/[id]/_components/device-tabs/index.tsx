import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SettingsTab } from "./settings-tab";
import { AccessTab } from "./access-tab";
import { GeneralTab } from "./general-tab";
import { $Enums } from "@prisma/client";

interface DeviceTabsProps {
  role: string | null | undefined;
  device: {
    id: number;
    deviceName: string;
    streetAddress: string;
    city: string;
    country: string;
    model: string;
    SIM: string;
    status: $Enums.STATUS;
    state: $Enums.STATE;
    ownerId: number;
  } | null;
}

export const DeviceTabs = ({ role, device }: DeviceTabsProps) => {
  return (
    <div className="mt-14">
      <Tabs defaultValue="general">
        <TabsList className="w-full border-b">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="access">Access</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <GeneralTab role={role} device={device}/>
        </TabsContent>
        <TabsContent value="access">
          <AccessTab />
        </TabsContent>
        <TabsContent value="settings">
          <SettingsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
