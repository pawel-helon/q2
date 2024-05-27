"use server";

import { verifySession } from "@/lib/data-access-layer";

import { DeleteAccount } from "./_components/delete-account";
import { AccountCard } from "./_components/account-card";
import { Header } from "@/app/_components/header";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";

import { Role } from "@/types";

export default async function AccountPage() {
  const session = await verifySession();
  const role = session.role as Role;
  
  const userId = Number(session.userId);

  return (
    <>
      <Navbar>
        <DeleteAccount userId={userId} />
      </Navbar>
      <Header title="Account">
        <Badge variant={role}>{role.toLocaleLowerCase()}</Badge>
      </Header>
      <div className="mt-[5.5rem] pt-[3rem] border-t">
        <AccountCard userId={userId} role={role} />
      </div>
    </>
  );
}
