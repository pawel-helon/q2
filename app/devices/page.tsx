import { Header } from "@/app/_components/header";
import { MainContent } from "./_components/main-content";
import { MainContentServer } from "./_components/main-content-server";

export default function DevicesPage() {
  return (
    <div className="w-full">
      <Header />
      <MainContent />
      {/* <MainContent /> */}
      {/* <MainContentServer /> */}
    </div>
  )
}
