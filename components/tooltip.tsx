import {
  TooltipShad,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Tooltip({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <TooltipProvider>
      <TooltipShad>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          className="bg-transparent border border-border"
        >
          {title}
        </TooltipContent>
      </TooltipShad>
    </TooltipProvider>
  );
}
