"use server";

import { GeneralTab } from "./general-tab";
import { AccessTab } from "./access-tab";
import { SettingsTab } from "./settings-tab";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Device, ROLE, User } from "@prisma/client";

export async function DeviceTabs({
  role,
  device,
  users,
}: {
  role: ROLE;
  device: Device;
  users: User[];
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
        <AccessTab users={users}/>
      </TabsContent>
      <TabsContent value="settings">
        <SettingsTab />
      </TabsContent>
    </Tabs>
  );
}
