"use client";

import { SignUpForm } from "./sign-up-form";
import { DialogContent } from "@/components/dialog-content";
import { Dialog, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const SignUp = () => {
  return (
    <>
      <div className="xs:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">Sign up</Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle className="text-left mb-12">Create account</SheetTitle>
            </SheetHeader>
            <SignUpForm>
              <SheetClose className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                Cancel
              </SheetClose>
            </SignUpForm>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden xs:block">
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
      </div>
    </>
  );
};
