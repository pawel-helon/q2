"use server";

import { Header } from "@/app/_components/header";
import { AccountCard } from "./account-card";
import { Navbar } from "@/components/navbar";
import { DeleteAccount } from "./delete-account";
import { Tooltip } from "@/components/tooltip";
import { Badge } from "@/components/ui/badge";

import { ROLE } from "@prisma/client";

export async function Desktop({ userId, role }: { userId: number; role: ROLE }) {
  return (
    <div className="hidden xs:block">
      <Navbar>
        <DeleteAccount userId={userId} />
      </Navbar>
      <Header title="Account">
        <Tooltip title="User role">
          <Badge variant={role}>{role.toLocaleLowerCase()}</Badge>
        </Tooltip>
      </Header>
      <div className="mt-[5.5rem] pt-[3rem] border-t">
        <AccountCard userId={userId} role={role} />
      </div>
    </div>
  );
}
