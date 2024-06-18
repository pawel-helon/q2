import { verifySession } from "@/lib/data-access-layer";

import { ROLE } from "@prisma/client";
import Link from "next/link";

export default async function Devices({
  admin,
  notAdmin,
  addDevice,
  children,
}: {
  admin: React.ReactNode;
  notAdmin: React.ReactNode;
  addDevice: React.ReactNode;
  children: React.ReactNode;
}) {
  const session = await verifySession();

  const role = session.role as ROLE;
  return (
    <>
      <Link href="/add-device">Add device</Link>
      {role === ROLE.ADMIN ? admin : notAdmin}
      <div>{addDevice}</div>
      <div>{children}</div>
    </>
  );
}
