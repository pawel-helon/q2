"use server";

import { verifySession } from "@/lib/data-access-layer";
import { readMany, readManyIds, readUnique } from "@/lib/data/read";

import { UserCard } from "./_components/user-card";
import { DeviceCard } from "./_components/device-card";
import { MoreButton } from "./_components/more-button";
import { Navbar } from "@/components/navbar";
import { Tooltip } from "@/components/tooltip";
import { Badge } from "@/components/ui/badge";

import { $Enums, User, Device, ROLE } from "@prisma/client";
import { id } from "@/types";
import { Header } from "./_components/header";

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
  const user = (await readUnique(Number(userId), "user")) as User;

  const devices = (await readMany("devices")) as Device[];
  
  const users = (await readManyIds("users")) as id[];

  return (
    <>
      {role === $Enums.ROLE.ADMIN && (
        <>
          <Navbar>
            <MoreButton userId={userId} devices={devices} />
          </Navbar>
          <Header title={user.name as string} userId={userId} users={users}>
            <Tooltip title="User role">
              <Badge variant={user.role}>{user.role.toLocaleLowerCase()}</Badge>
            </Tooltip>
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
