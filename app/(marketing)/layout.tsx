"use server";

import { Paragraph } from "@/components/typography";
import { Github } from "lucide-react";
import Link from "next/link";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col flex-start mx-auto lg:max-w-[976px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
      {children}
      <div className="absolute bottom-3 left-3">
        <Link
          href="https://github.com/pawel-helon/q2"
          className="flex gap-2 items-center text-muted-foreground"
        >
          <Github />
          <Paragraph variant="small-thin">Source code</Paragraph>
        </Link>
      </div>
    </div>
  );
}
