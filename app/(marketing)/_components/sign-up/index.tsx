"use client";

import { SignUpForm } from "./sign-up-form";
import { DialogContent } from "@/components/dialog-content";
import { Dialog, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const SignUp = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Sign up</Button>
      </DialogTrigger>
      <DialogContent title="Create account">
        <SignUpForm>
          <DialogClose className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
            Cancel
          </DialogClose>
        </SignUpForm>
      </DialogContent>
    </Dialog>
  );
};
