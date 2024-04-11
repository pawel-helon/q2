"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Items } from "./items";
import { Account } from "./account";
import { ChevronButton } from "./chevron-button";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <motion.div
      animate={{ width: collapsed ? 56 : 220 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-between border-l-2 border-r-2 border-border"
    >
      <div className="flex flex-col gap-10">
        <ChevronButton collapsed={collapsed} handleCollapse={handleCollapse} />
        <Items collapsed={collapsed} />
      </div>
      <Account collapsed={collapsed} />
    </motion.div>
  );
};
