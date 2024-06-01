"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { updateUsersWithAccess } from "@/lib/data/update";

export function RemoveUsers({
  ids,
  pathname,
}: {
  ids: any[];
  pathname: string;
}) {
  const deviceId = Number(pathname.split("/")[2]);
  const router = useRouter();

  return (
    <Button
      size="sm"
      variant="ghost"
      className="flex items-center justify-start"
      onClick={() => {
        updateUsersWithAccess(deviceId, ids).then(() => {
          setTimeout(() => {
            toast.success("User(s) removed successfully!");
          }, 500);
          router.refresh();
        });
      }}
    >
      Remove
    </Button>
  );
}
