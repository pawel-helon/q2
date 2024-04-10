import { Header } from "@/app/_components/header";
import { MainContentServer } from "./_components/main-content-server";
import { MainContentClient } from "./_components/main-content-client";

export default function DevicesPage() {
  return (
    <div className="w-full">
      <Header />
      <MainContentServer />
      <MainContentClient />
    </div>
  )
}
