"use client";

import { useRouter } from "next/navigation";
import { Link as LinkIcon, X } from "lucide-react";

import { Heading } from "@/components/typography";

import { setOpen } from "@/types";

export function NotificationsHeader({ setOpen }: { setOpen: setOpen }) {
  const router = useRouter();

  return (
    <div className="flex justify-between border-b p-4">
      <button
        className="flex gap-2 items-center"
        onClick={() => {
          router.push("/notifications");
          setOpen(false);
        }}
      >
        <Heading variant="h4">Notifications</Heading>
        <LinkIcon size={16} />
      </button>
      <button onClick={() => setOpen(false)}>
        <X size={16} />
      </button>
    </div>
  );
}
