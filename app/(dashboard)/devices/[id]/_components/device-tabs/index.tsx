"use server";

import { SettingsTab } from "./settings-tab";
import { AccessTab } from "./access-tab";
import { GeneralTab } from "./general-tab";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Device, ROLE } from "@prisma/client";

export async function DeviceTabs({
  role,
  device,
}: {
  role: ROLE;
  device: Device;
}) {
  return (
    <Tabs defaultValue="general" className="mt-14">
      <TabsList className="w-full border-b">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="access">Access</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <GeneralTab role={role} device={device} />
      </TabsContent>
      <TabsContent value="access">
        <AccessTab />
      </TabsContent>
      <TabsContent value="settings">
        <SettingsTab />
      </TabsContent>
    </Tabs>
  );
}
