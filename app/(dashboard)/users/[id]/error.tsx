"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMedia } from "react-use";
import { CircleAlert } from "lucide-react";

import {
  Dialog,
  DialogContentShad,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  } from "@/components/ui/dialog";
  import {
    Sheet,
    SheetContentShad,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    } from "@/components/ui/sheet";
  import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const router = useRouter();
  const isMobile = useMedia("(max-width: 480px)", false);

  return (
    <>
      {isMobile ? (
        <Sheet open={true}>
          <SheetContentShad side="bottom">
            <SheetHeader className="flex flex-row justify-between mb-12 space-y-0">
              <SheetTitle>Error</SheetTitle>
              <CircleAlert />
            </SheetHeader>
            <SheetDescription>
              Something went wrong. Try again or head to devices page.
            </SheetDescription>
            <div className="flex flex-col gap-2 justify-end mt-6">
              <Button onClick={() => router.push("/devices")} variant="ghost">
                Devices
              </Button>
              <Button onClick={() => reset()}>Try again</Button>
            </div>
          </SheetContentShad>
        </Sheet>
      ) : (
        <Dialog open={true}>
          <DialogContentShad>
            <DialogHeader className="flex flex-row justify-between mb-6 space-y-0">
              <DialogTitle>Error</DialogTitle>
              <CircleAlert />
            </DialogHeader>
            <DialogDescription>
              Something went wrong. Try again or head to devices page.
            </DialogDescription>
            <div className="flex gap-2 justify-end mt-6">
              <Button onClick={() => router.push("/devices")} variant="ghost">
                Devices
              </Button>
              <Button onClick={() => reset()}>Try again</Button>
            </div>
          </DialogContentShad>
        </Dialog>
      )}
    </>
  );
}
