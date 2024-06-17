"use server";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default async function NotEndUserLayout({
  general,
  access,
}: {
  general: React.ReactNode;
  access: React.ReactNode;
}) {
  return (
    <>
      <Tabs defaultValue="general" className="mt-[20px] xs:mt-14">
        <TabsList className="w-full border-b">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="access">Access</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-6">
          {general}
        </TabsContent>
        <TabsContent value="access" className="mt-6">
          {access}
        </TabsContent>
      </Tabs>
    </>
  );
}
