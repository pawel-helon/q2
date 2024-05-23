"use server";

import { Loader } from "lucide-react";

export default async function Loading() {
  return (
    <div className="w-full flex relative justify-center items-center px-4">
      <div className=" w-[500px] h-[620px] fixed flex justify-center items-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border border-border bg-background shadow-lg rounded-lg">
        <Loader className="animate-spin" />
      </div>
    </div>
  );
}
