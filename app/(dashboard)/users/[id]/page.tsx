"use server";

import { readMany, readUnique } from "@/lib/data/read";
import { verifySession } from "@/lib/data-access-layer";

import { UserCard } from "./_components/user-card";
import { DeviceCard } from "./_components/device-card";
import { MoreButton } from "./_components/more-button";
import { Navbar } from "@/components/navbar";
import { Header } from "@/app/_components/header";
import { Badge } from "@/components/ui/badge";

import { $Enums, User, Device, ROLE } from "@prisma/client";

export default async function UserPage({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const session = await verifySession();
  const role = session.role as ROLE;

  const userId = Number(params.id);
  const user = (await readUnique(Number(userId), "user")) as User

  const devices = await readMany("devices") as Device[]

  return (
    <>
      {role === $Enums.ROLE.ADMIN && (
        <>
          <Navbar>
            <MoreButton userId={userId} devices={devices} />
          </Navbar>
          <Header title={user.name as string}>
            <Badge variant={user.role}>{user.role.toLocaleLowerCase()}</Badge>
          </Header>
          <div className="mt-[5.5rem] pt-[3rem] border-t w-full flex flex-col gap-4 md:grid md:grid-cols-3 mb-12">
            <UserCard user={user} />
            <DeviceCard user={user} />
          </div>
        </>
      )}
    </>
  );
}
