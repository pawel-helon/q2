"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Items } from "./items";
import { ChevronButton } from "./chevron-button";
import { Account } from "./account";
import { Notifications } from "./notifications";
import { email, notifications } from "@/types";

export function Sidebar({
  email,
  role,
  notifications,
}: {
  role: string;
  email: email;
  notifications: notifications;
}) {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <motion.div
      animate={{ width: collapsed ? 56 : 220 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-between border-l-[1px] border-r-[1px] border-border"
    >
      <div className="flex flex-col gap-10">
        <ChevronButton collapsed={collapsed} handleCollapse={handleCollapse} />
        <Items collapsed={collapsed} role={role} />
      </div>
      <div className="flex flex-col gap-0">
        <Notifications collapsed={collapsed} notifications={notifications} />
        <Account collapsed={collapsed} email={email} />
      </div>
    </motion.div>
  );
}
