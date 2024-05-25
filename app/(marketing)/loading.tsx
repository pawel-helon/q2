"use server";

import { Loader } from "lucide-react";

export default async function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center px-4">
      <Loader className="animate-spin absolute top-1/2 left-1/2" />
    </div>
  );
}
