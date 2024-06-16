"use server";

import { Loader } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Header } from "@/app/_components/header";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/typography";

export default async function Loading() {
  return (
    <>
      <Navbar>
        <Button>Delete account</Button>
      </Navbar>
      <Heading variant="h1" className="mt-[78px] pt-8 xs:mt-12 xs:pt-0">
        Account
      </Heading>
      <div className="h-10 flex justify-between border-b border-border pb-1 my-12" />
      <div className="w-full h-[400px] flex items-center justify-center mt-12 py-4 border border-border shadow-black shadow-2xl rounded-lg">
        <Loader className="animate-spin" />
      </div>
    </>
  );
}
