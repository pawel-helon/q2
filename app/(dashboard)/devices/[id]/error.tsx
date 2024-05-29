"use client";

import { useEffect } from "react";

import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/typography";
import { CircleAlert } from "lucide-react";

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

  return (
    <div className="h-screen flex justify-center items-center">
    <Card className="flex flex-col p-12 justify-center items-center gap-4">
      <CircleAlert className="size-10" />
      <Heading variant="h3">Something went wrong!</Heading>
      <Button onClick={() => reset()}>Try again</Button>
    </Card>
  </div>
  );
}
