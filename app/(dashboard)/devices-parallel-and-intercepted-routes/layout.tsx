import Link from "next/link";

import { verifySession } from "@/lib/data-access-layer";

import { ROLE } from "@prisma/client";

export default async function Devices(props: {
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
      <div>{props.addDevice}</div>
      {role === ROLE.ADMIN ? props.admin : props.notAdmin}
      <div>{props.children}</div>
    </>
  );
}
