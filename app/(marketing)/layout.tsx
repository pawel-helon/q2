import { cn } from "@/lib/utils";

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "relative min-h-screen flex flex-col flex-start mx-auto",
        "lg:max-w-[976px] xl:max-w-[1280px] 2xl:max-w-[1536px]"
      )}
    >
      {children}
    </div>
  );
}

export default MarketingLayout;
