import { Tooltip } from "@/components/tooltip";
import { Heading } from "@/components/typography";

export function Header({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-start mt-[88px]">
      {children}
      <Heading variant="h1">{title}</Heading>
    </div>
  );
}
