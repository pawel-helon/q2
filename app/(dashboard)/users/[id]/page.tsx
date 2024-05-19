"use server";

import { fetchUser } from "@/app/actions/fetchUser";
import { fetchDevices } from "@/app/actions/devices/fetch-devices";

import { MoreButton } from "./_components/more-button";
import { Navbar } from "@/components/navbar";
import { Header } from "@/app/_components/header";
import { Badge } from "@/components/ui/badge";
import { UserCard } from "./_components/user-card";
import { DeviceCard } from "./_components/device-card";
import { Role } from "@/types";

export default async function UserPage({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const userId = Number(params.id);
  const user = await fetchUser(userId);
  const userName = String(user?.name);
  const role = user?.role as Role;

  const devices = await fetchDevices();

  return (
    <div>
      <Navbar>
        <MoreButton userId={userId} devices={devices} />
      </Navbar>
      <Header title={userName}>
        <Badge variant={role}>{role}</Badge>
      </Header>
      <div className="mt-[5.5rem] pt-[3rem] border-t w-full flex flex-col gap-4 md:grid md:grid-cols-3 mb-12">
        <UserCard user={user} />
        <DeviceCard user={user} />
      </div>
    </div>
  );
}
