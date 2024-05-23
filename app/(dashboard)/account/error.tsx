"use client";

import { useEffect } from "react";

import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/typography";
import Image from "next/image";

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
      <Card className="w-[500px]">
        <CardHeader>
          <Heading variant="h3">Something went wrong!</Heading>
        </CardHeader>
        <CardContent className="mb-0 justify-center items-center">
          <Image
            src="/error.png"
            alt="Error"
            className="mt-8"
            width={263}
            height={263}
          />
        </CardContent>
        <CardFooter className="flex justify-end mt-8">
          <Button onClick={() => reset()}>Try again</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
