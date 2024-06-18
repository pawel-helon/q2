import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

import "@/app/globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Q",
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
        {children}
        <Toaster
          position="top-center"
          toastOptions={{className:"bg-background p-4 border-border text-xs font-bold text-white p-2 rounded-lg shadow-black shadow-lg"}}
        />
      </body>
    </html>
  );
}