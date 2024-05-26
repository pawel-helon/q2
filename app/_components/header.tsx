import { Heading } from "@/components/typography";

export function Header({
  title,
  children,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mt-12 flex gap-4 items-start">
      <Heading variant="h1">{title}</Heading>
      {children}
    </div>
  );
}
