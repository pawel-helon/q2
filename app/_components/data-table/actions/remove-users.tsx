"use client";

import { Button } from "@/components/ui/button";

export function RemoveUsers({ ids }: { ids: any[] }) {
  return (
    <Button
      size="sm"
      variant="ghost"
      className="flex items-center justify-start"
    >
      Remove
    </Button>
  );
}
