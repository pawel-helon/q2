"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export function PasswordConfirmation({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="confirm">Confirm password</Label>
      <div className="relative">
        <Input
          id="confirm"
          name="confirm"
          type={visibility ? "" : "password"}
          placeholder="*******"
        />
        <Button
          onClick={() => setVisibility(!visibility)}
          className={cn(
            "absolute top-1/2 transform -translate-y-1/2 right-1",
            "hover:bg-transparent text-muted-foreground"
          )}
          size="icon"
          variant="ghost"
          type="button"
        >
          {visibility ? <EyeOff /> : <Eye />}
        </Button>
      </div>
      {children}
    </div>
  );
}
