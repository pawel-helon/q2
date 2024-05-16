"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { approveRoleChange } from "@/app/actions/auth/approve-role-change";
import { SplitButton } from "@/components/split-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { notifications } from "@/types";

interface ItemsProps {
  notifications: notifications;
}

export const Items = ({ notifications }: ItemsProps) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex flex-col gap-8 rounded-sm pl-4 pr-2",
        "scrollbar max-h-[80vh] overflow-y-scroll scrollbar-w-2",
        "scrollbar-track-card-background scrollbar-thumb-rounded-full scrollbar-thumb-background/50"
      )}
    >
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="flex flex-col gap-4 items-center rounded-sm text-xs text-muted-foreground"
        >
          <div className="w-full flex justify-between items-center">
            <p className="text-sm text-white">Role change request</p>
            <Button variant="link" size="sm" className="p-0">
              Dismiss
            </Button>
          </div>
          <div className="w-full flex gap-2 items-center justify-between">
            <Avatar className="size-6">
              <AvatarImage src="/user.png" alt="user" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 mr-10">
              <p className="text-white">
                {new Date(notification.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p>{notification.title}</p>
            </div>
            <SplitButton
              primaryAction={() => {
                approveRoleChange(notification)
                  .then(() => {
                    setTimeout(() => {
                      toast.success("Role has been changed successfully!");
                      router.refresh();
                    }, 500);
                  })
                  .catch((error) => {
                    toast.error(error.message);
                  });
              }}
              primaryActionLabel="Accept"
              secondaryAction={() => console.log("clicked decline")}
              secondaryActionLabel="Decline"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
