import React from "react";
import { Navbar } from "./_components/navbar";
import { Loader, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Header } from "@/app/_components/header";

export default async function Loading() {
  return (
    <div>
      <Navbar />
      <Header title="Users" />
      <div className="flex justify-between border-b border-border pb-1 my-12">
        <div className="flex items-center">
          <Search className="text-muted-foreground" />
          <Input
            placeholder="Search by name"
            className="h-9 flex items-center border-none bg-background text-white"
          />
        </div>
      </div>
      <div className="w-full h-[400px] flex items-center justify-center mt-12 py-4 border border-border shadow-black shadow-2xl rounded-lg">
        <Loader />
      </div>
    </div>
  );
}
