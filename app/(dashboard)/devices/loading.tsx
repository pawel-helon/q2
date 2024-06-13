"use server";

import { Loader, Plus } from "lucide-react";

import { Navbar } from "@/components/navbar";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/typography";

export default async function Loading() {
  return (
    <>
      <Navbar>
        <Button>
          <Plus className="size-5 -ml-2 mr-2" />
          Add device
        </Button>
      </Navbar>
      <Heading variant="h1" className="mt-20 pt-8 xs:mt-12 xs:pt-0">
        Devices
      </Heading>
      <div className="h-10 flex justify-between border-b border-border pb-1 my-12" />
      <div className="w-full h-[400px] flex items-center justify-center mt-12 py-4 border border-border shadow-black shadow-2xl rounded-lg">
        <Loader className="animate-spin" />
      </div>
    </>
  );
}
