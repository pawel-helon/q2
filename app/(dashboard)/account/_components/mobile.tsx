"use server";

import { Tooltip } from "@/components/tooltip";
import { Badge } from "@/components/ui/badge";

import { ROLE } from "@prisma/client";
import { Actions } from "./mobile/actions";
import { Header } from "./mobile/header";
import { AccountCard } from "./mobile/account-card";

export async function Mobile({ userId, role }: { userId: number; role: ROLE }) {
  return (
    <div className="xs:hidden">
      <Header title="Account">
        <Badge className="w-min" variant={role}>{role.toLocaleLowerCase()}</Badge>
      </Header>
      <AccountCard userId={userId} role={role}/>
      <Actions userId={userId} />
    </div>
  );
}
