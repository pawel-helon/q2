"use server";

import { EllipsisVertical, Loader } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Header } from "@/app/_components/header";

import { Button } from "@/components/ui/button";

export default async function Loading() {
  return (
    <>
      <Navbar>
        <Button variant="outline" size="icon">
          <EllipsisVertical />
        </Button>
      </Navbar>
      <Header title="User" />
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