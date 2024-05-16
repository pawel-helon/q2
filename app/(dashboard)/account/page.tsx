"use server";

import { verifySession } from "@/lib/data-access-layer";

import { DeleteAccount } from "./_components/delete-account";
import { AccountCard } from "./_components/account-card";
import { Header } from "@/app/_components/header";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";

export default async function AccountPage() {
  const session = await verifySession();
  const userId = Number(session.userId);
  const role = String(session?.role);

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
        <DeleteAccount userId={userId} />
      </Navbar>
      <Header title="Account">
        <Badge className={badgeClassName}>{role}</Badge>
      </Header>
      <div className="mt-[5.5rem] border-t">
        <AccountCard userId={userId} role={role} />
      </div>
    </div>
  );
}
