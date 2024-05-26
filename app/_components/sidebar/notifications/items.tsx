"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { update } from "@/lib/data/update";
import { remove } from "@/lib/data/delete";

import { SplitButton } from "@/components/split-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Notification } from "@prisma/client";

export function Items({ notifications }: { notifications: Notification[] }) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 rounded-sm pl-4 pr-2 w-[427px] mb-4 pt-4 scrollbar max-h-[64vh] overflow-y-scroll scrollbar-w-2 scrollbar-track-card-background scrollbar-thumb-rounded-full scrollbar-thumb-background/50">
      {notifications
        .map((notification) => (
          <div
            key={notification.id}
            className="flex flex-col gap-4 items-center rounded-sm text-xs text-muted-foreground mb-1"
          >
            <div className="w-full flex justify-between items-center">
              <p className="text-sm text-foreground">Role change request</p>
              <p className="text-foreground-muted">
                {new Date(notification.createdAt).toLocaleString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>
            </div>
            <div className="w-full flex gap-2 items-center justify-between">
              <Avatar className="size-6">
                <AvatarImage src="/user.png" alt="user" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1 mr-10">
                <p>{notification.title}</p>
              </div>
              <SplitButton
                primaryAction={() => {
                  update(
                    notification.requester,
                    "user",
                    "role",
                    notification.requestedRole
                  )
                    .then(() => {
                      remove(notification.id, "notification");
                    })
                    .then(() => {
                      setTimeout(() => {
                        toast.success("Request has been accepted!");
                      }, 500);
                      router.refresh();
                    })
                    .catch((error) => {
                      toast.error(error.message);
                    });
                }}
                primaryActionLabel="Accept"
                secondaryAction={() =>
                  remove(notification.id, "notification")
                    .then(() => {
                      setTimeout(() => {
                        toast.success("Request has been declined!");
                        router.refresh();
                      }, 500);
                    })
                    .catch((error) => {
                      toast.error(error.message);
                    })
                }
                secondaryActionLabel="Decline"
              />
            </div>
          </div>
        ))
        .reverse()}
    </div>
  );
}
