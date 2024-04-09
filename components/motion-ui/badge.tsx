"use client"

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";

interface BadgeProps {
  type: "label" | "icon";
  state: boolean;
  children?: React.ReactNode;
}

export const Badge = ({ type, state, children }: BadgeProps) => {
  const labelVariant = state
    ? "border-transparent bg-emerald-500 text-primary-foreground hover:bg-emerald-500/80"
    : "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80";

  const iconVariantClassName = "rounded-full p-0.5 text-white"

  const iconVariant = state
    ? <Check className={cn(iconVariantClassName, "bg-emerald-500")}/>
    : <X className={cn(iconVariantClassName, "bg-destructive")}/>;

  switch (type) {
    case "label": {
      return (
        <motion.div
          key={labelVariant}
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            labelVariant
          )}
        >
          {children}
        </motion.div>
      );
    }
    case "icon": {
      return (
        <motion.div
          key={labelVariant}
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {iconVariant}
        </motion.div>
      );
    }
    default: {
      throw Error("Invalid Badge type");
    }
  }
};
