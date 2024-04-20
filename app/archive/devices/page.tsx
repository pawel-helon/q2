import { Header } from "@/app/_components/header";
import { MainContent } from "./_components/main-content";
import { MainContentServer } from "./_components/main-content-server";
import { Navbar } from "./_components/navbar";

export default function DevicesPage() {

  return (
    <div className="w-full">
      <Navbar />
      <Header title="Devices"/>
      <MainContent />
      {/* <MainContent /> */}
      {/* <MainContentServer /> */}
    </div>
  )
}
