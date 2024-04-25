"use client";

import { useEffect } from "react";

import {
  Card,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/typography";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="bg-transparent">
        <CardHeader>
          <Heading variant="h3">
            Something went wrong!
          </Heading>
        </CardHeader>
        <CardFooter className="flex justify-end mt-12">
          <Button onClick={() => reset()}>
            Try again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
