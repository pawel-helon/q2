"use client";

import Link from "next/link";
import { Container } from "lucide-react";

import { cn } from "@/lib/utils";
import { SignInForm } from "@/app/(marketing)/_components/navbar/sign-in/sign-in-form";

export default function SignInPage() {
  return (
    <div className="h-screen w-full flex relative justify-center items-center">
      <div className="absolute top-0 left-0 w-full py-6 px-4 flex gap-2 justify-start items-center">
        <Link href="/">
          <Container />
        </Link>
      </div>
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
          Sign in
        </div>
        <SignInForm />
      </div>
    </div>
  );
};