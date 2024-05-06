"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Items } from "./items";
import { ChevronButton } from "./chevron-button";
import { Account } from "./account";

interface SidebarProps {
  email: {
    email: string;
} | null;
}

export const Sidebar = ({ email }: SidebarProps) => {
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
        <Items collapsed={collapsed} />
      </div>
      <Account collapsed={collapsed} email={email}/>
    </motion.div>
  );
};
