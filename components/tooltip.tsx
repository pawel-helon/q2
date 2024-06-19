import {
  TooltipShad,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Tooltip({
  children,
  title,
  side,
  align,
  alignOffset,
}: {
  children: React.ReactNode;
  title: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "center" | "end" | "start";
  alignOffset?: number
}) {
  return (
    <TooltipProvider>
      <TooltipShad>
        <TooltipTrigger asChild suppressHydrationWarning>
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          alignOffset={alignOffset}
          className="bg-transparent border border-border"
        >
          {title}
        </TooltipContent>
      </TooltipShad>
    </TooltipProvider>
  );
}
