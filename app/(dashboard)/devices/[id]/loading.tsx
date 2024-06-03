"use server";

import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Loader,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default async function Loading() {
  return (
    <>
      <Navbar>
        <Button variant="outline" size="icon">
          <EllipsisVertical />
        </Button>
      </Navbar>
      <div className="mt-3 flex flex-col gap-2">
        <div className="flex gap-1">
          <Button variant="outline" size="sm" className="rounded-full px-1">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="sm" className="rounded-full px-1">
            <ChevronRight />
          </Button>
        </div>
        <div className="flex gap-4 items-start h-[40px]" />
      </div>
      <div className="h-10 flex justify-between border-b border-border pb-1 my-12" />
      <div className="w-full flex flex-col gap-4 md:grid md:grid-cols-3 mb-12">
        <div className="w-full h-[240px] flex col-span-2 items-center justify-center py-4 border border-border shadow-black shadow-2xl rounded-lg">
          <Loader className="animate-spin" />
        </div>
        <div className="w-full h-[240px] flex col-span-1 items-center justify-center py-4 border border-border shadow-black shadow-2xl rounded-lg">
          <Loader className="animate-spin" />
        </div>
      </div>
    </>
  );
}
