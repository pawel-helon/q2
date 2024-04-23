import { SignedIn, UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

interface AccountProps {
  collapsed: boolean;
}

export const Account = ({ collapsed }: AccountProps) => {
  return (
    <div
      className={cn(
        "flex w-full items-center ml-[6px] px-[6px] mb-[10px] animate transition-all",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </>
      <div className="w-full" />
    </div>
  );
};