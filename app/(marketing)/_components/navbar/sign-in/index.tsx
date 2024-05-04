"use client";

import { SignInForm } from "./sign-in-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export const SignIn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign in</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-6">Sign in</DialogTitle>
        </DialogHeader>
        <SignInForm>
          <DialogClose
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none",
              "focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              "hover:bg-accent hover:text-accent-foreground",
              "h-9 px-4 py-2"
            )}
          >
            Cancel
          </DialogClose>
        </SignInForm>
      </DialogContent>
    </Dialog>
  );
};
