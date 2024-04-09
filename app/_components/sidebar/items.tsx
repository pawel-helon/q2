import Link from "next/link";
import { usePathname } from "next/navigation";
import { UsersRound, Vault } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ItemsProps {
  collapsed: boolean;
}

export const Items = ({ collapsed }: ItemsProps) => {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        collapsed
          ? "flex flex-col gap-2 w-full items-center"
          : "flex flex-col gap-2 w-full px-2"
      )}
    >
      {items.map((item, i) => (
        <li key={i}>
          <Link href={item.href}>
            <Button
              size="icon"
              className={cn(
                !collapsed &&
                  "h-9 w-full justify-between px-2 bg-primary text-whiteQ shadow hover:bg-primary/90",
                pathname === item.href
                  ? "bg-primary hover:bg-primary/90"
                  : "bg-border/80 hover:bg-border/60"
              )}
            >
              {!collapsed && item.label}
              {item.icon}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const items = [
  { href: "/devices", label: "Devices", icon: <Vault /> },
  { href: "/users", label: "Users", icon: <UsersRound /> },
];
