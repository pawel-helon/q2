"use client";

import { cn } from "@/lib/utils";
import { SignUpForm } from "@/app/(marketing)/_components/sign-up/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="w-full flex relative justify-center items-center">
      <div
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]",
          "gap-4 border bg-background p-6 shadow-lg rounded-lg",
          "flex flex-col space-y-1.5 sm:text-left"
        )}
      >
        <div
          className={cn(
            "flex flex-col space-y-1.5 sm:text-left mb-6",
            "text-lg font-semibold leading-none tracking-tight"
          )}
        >
          Sign up
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};