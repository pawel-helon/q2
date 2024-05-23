"use server";

import { Navbar } from "@/components/navbar";
import { Loader } from "lucide-react";

export default async function Loading() {
  return (
    <div className="w-full flex relative justify-center items-center px-4">
      <Navbar className="py-[30px]" />
      <div className="fixed left-[50%] top-[50%] z-50 grid max-w-lg translate-x-[-50%] translate-y-[-50%] border border-border bg-background shadow-lg rounded-lg w-[462px] h-[576px]">
        <Loader className="animate-spin absolute top-1/2 left-1/2" />
      </div>
    </div>
  );
}
