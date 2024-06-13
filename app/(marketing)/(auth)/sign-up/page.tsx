"use client";

import Link from "next/link";
import { Container } from "lucide-react";

import { SignUpForm } from "@/app/(marketing)/_components/sign-up/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="w-full flex relative justify-center items-center px-3 xs:px-4">
      <div className="flex w-full py-[30px] justify-start items-center">
        <Link href="/">
          <Container />
        </Link>
      </div>
      <div className="-mt-4 xs:mt-0 fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 xs:border bg-background p-3 xs:p-6 shadow-lg rounded-lg flex flex-col space-y-1.5 sm:text-left">
        <div className="flex flex-col space-y-1.5 sm:text-left mb-6 text-lg font-semibold leading-none tracking-tight">
          Sign up
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
