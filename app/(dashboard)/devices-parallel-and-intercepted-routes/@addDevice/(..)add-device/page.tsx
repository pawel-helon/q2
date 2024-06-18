"use client";

import { useState } from "react";
import { useMedia } from "react-use";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogContentTemp,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [openDialog, setOpenDialog] = useState(true);
  const [openSheet, setOpenSheet] = useState(true);
  const isMobile = useMedia("(max-width: 480px)", false);
  const router = useRouter()

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContentTemp>
        Temp
      </DialogContentTemp>
    </Dialog>
  );
}
