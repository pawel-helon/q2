import { Header } from "@/app/_components/header";
import { verifySession } from "@/lib/data-access-layer";
import { Navbar } from "./_components/navbar";
import { Badge } from "@/components/ui/badge";
import { AccountCard } from "./_components/account-card";

export default async function AccountPage() {
  const session = await verifySession();
  const userId = Number(session.userId);
  const role = String(session?.role);

  return (
    <div>
      <Navbar />
      <Header title="Account">
        <Badge className="bg-amber-700">{role}</Badge>
      </Header>
      <div className="mt-[84px] border-t">
        <AccountCard userId={userId}/>
      </div>
    </div>
  );
}
