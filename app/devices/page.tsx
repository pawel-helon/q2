import { Header } from "@/app/_components/header";
import { MainContent } from "./_components/main-content";
import { MainContentServer } from "./_components/main-content-server";
import { MainContentTemp } from "./_components/main-content/main-content-temp";

export default function DevicesPage() {
  return (
    <div className="w-full">
      <Header />
      {/* <MainContent /> */}
      <MainContentTemp />
      {/* <MainContentServer /> */}
    </div>
  )
}
