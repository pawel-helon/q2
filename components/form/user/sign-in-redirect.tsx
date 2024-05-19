"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function SignInRedirect() {
  const router = useRouter();

  return (
    <div className="flex items-center my-4">
      <p className="text-[0.8rem] text-muted-foreground">
        Already have an account?
      </p>
      <Button
        variant="link"
        className="-ml-2"
        onClick={() => router.push("/sign-in")}
      >
        Sign in
      </Button>
    </div>
  );
}
