"use server";

import { Desktop } from "./_components/desktop";
import { Mobile } from "./_components/mobile";

import { verifySession } from "@/lib/data-access-layer";
import { Role } from "@/types";

export default async function AccountPage() {
  const session = await verifySession();
  const role = session.role as Role;

  const userId = Number(session.userId);

  return (
    <>
      <Mobile userId={userId} role={role} />
      <Desktop userId={userId} role={role} />
    </>
  );
}
