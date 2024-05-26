"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Items } from "./items";
import { ChevronButton } from "./chevron-button";
import { Account } from "./account";
import { Notifications } from "./notifications";
import { Notification, ROLE } from "@prisma/client";

export function Sidebar({
  email,
  role,
  notifications,
}: {
  role: ROLE;
  email: string;
  notifications: Notification[];
}) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <motion.div
      animate={{ width: collapsed ? 56 : 220 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col justify-between border-l-[1px] border-r-[1px] border-border"
    >
      <div className="flex flex-col gap-10">
        <ChevronButton collapsed={collapsed} handleCollapse={() => setCollapsed(!collapsed)} />
        <Items role={role} collapsed={collapsed} />
      </div>
      <div className="flex flex-col gap-2">
        <Notifications collapsed={collapsed} notifications={notifications} />
        <Account collapsed={collapsed} email={email} />
      </div>
    </motion.div>
  );
}
