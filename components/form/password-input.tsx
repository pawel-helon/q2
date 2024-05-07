"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PasswordInputProps {
  id: string;
  name: string;
}

export const PasswordInput = ({id, name}: PasswordInputProps) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="relative">
      <Input
        id={id}
        name={name}
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
      >
        {visibility ? <EyeOff /> : <Eye />}
      </Button>
    </div>
  );
};
