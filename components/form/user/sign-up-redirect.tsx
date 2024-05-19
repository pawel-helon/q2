"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function SignUpRedirect() {
  const router = useRouter();

  return (
    <div className="flex items-center my-4">
      <p className="text-[0.8rem] text-muted-foreground">
        Don&apos;t have account?
      </p>
      <Button
        variant="link"
        className="-ml-2"
        onClick={() => router.push("/sign-up")}
      >
        Sign up
      </Button>
    </div>
  );
}
