"use server";

import { Paragraph } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col flex-start mx-auto lg:max-w-[976px] xl:max-w-[1280px] 2xl:max-w-[1536px] border-l-[1px] border-r-[1px] border-border">
      {children}
      <Link href="https://github.com/pawel-helon/q2" className="absolute bottom-3 left-3">
        <FaGithub size={24} className="hover:text-muted-foreground transition-colors"/>
      </Link>
    </div>
  );
}
