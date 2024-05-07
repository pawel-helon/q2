"use server"

import { Badge } from "@/components/ui/badge";
import { Header } from "@/app/_components/header";
import { Navbar } from "./_components/navbar";
import { AccountCard } from "./_components/account-card";
import { verifySession } from "@/lib/data-access-layer";

export default async function AccountPage() {
  const session = await verifySession();
  const userId = Number(session.userId);
  const role = String(session?.role);

  let badgeClassName
  if (role === "ADMIN") {
    badgeClassName = "bg-amber-700 hover:bg-amber-700/80"
  } else if (role === "OWNER"){
    badgeClassName = "bg-pink-700 hover:bg-pink-700/80"
  } else {
    badgeClassName = "bg-indigo-700 hover:bg-indigo-700/80"
  }

  return (
    <div>
      <Navbar />
      <Header title="Account">
        <Badge className={badgeClassName}>{role}</Badge>
      </Header>
      <div className="mt-[84px] border-t">
        <AccountCard userId={userId}/>
      </div>
    </div>
  );
}
