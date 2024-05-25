import { Heading } from "@/components/typography";

interface HeaderProps {
  children?: React.ReactNode;
  title: string | undefined
}

export const Header = ({ title, children }: HeaderProps) => {
  return (
    <div className="mt-12 flex gap-4 items-start">
      <Heading variant="h1">
        {title}
      </Heading>
      {children}
    </div>
  );
};
