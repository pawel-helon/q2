"use server";

import { fetchUser } from "@/app/actions/fetchUser";
import { fetchDevices } from "@/app/actions/devices/fetch-devices";

import { MoreButton } from "./_components/more-button";
import { Navbar } from "@/components/navbar";
import { Header } from "@/app/_components/header";
import { Badge } from "@/components/ui/badge";
import { UserCard } from "./_components/user-card";
import { DeviceCard } from "./_components/device-card";


interface UserPageProps {
  params: {
    id: number;
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const userId = Number(params.id);
  const user = await fetchUser(userId);
  const userName = String(user?.name);
  const role = String(user?.role);

  const devices = await fetchDevices();

  let badgeClassName;
  if (role === "ADMIN") {
    badgeClassName = "bg-amber-700 hover:bg-amber-700/80";
  } else if (role === "OWNER") {
    badgeClassName = "bg-pink-700 hover:bg-pink-700/80";
  } else {
    badgeClassName = "bg-indigo-700 hover:bg-indigo-700/80";
  }
  

  return (
    <div>
      <Navbar>
        <MoreButton userId={userId} devices={devices} />
      </Navbar>
      <Header title={userName}>
        <Badge className={badgeClassName}>{role}</Badge>
      </Header>
      <div className="mt-[5.5rem] pt-[5.5rem] border-t w-full grid grid-cols-3 gap-4">
        <UserCard user={user}/>
        <DeviceCard user={user}/>
      </div>
    </div>
  );
}
