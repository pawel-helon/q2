import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useRouter } from "next/navigation";

export function AccountItem() {
  const router = useRouter();

  return (
    <DropdownMenuItem
        onSelect={() => router.push("/account")}
        className="flex justify-between"
    >
        Account
      <CircleUserRound size={20} />
    </DropdownMenuItem>
  );
};
