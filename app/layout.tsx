import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/app/globals.css";

import { cn } from "@/lib/utils";
import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Q2",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "antialiased")}>
        <div className="flex mx-auto xl:max-w-[1280px] 2xl:max-w-[1536px]">
          <Sidebar />
          <div className="flex flex-col w-full px-6">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
