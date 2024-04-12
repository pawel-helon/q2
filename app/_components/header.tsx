import { Heading } from "@/components/typography";

interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className="mt-12 flex gap-4 items-start">
      <Heading variant="h1" className="leading-[4rem]">
        Devices
      </Heading>
      {children}
    </div>
  );
};