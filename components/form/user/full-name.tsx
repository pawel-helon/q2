import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  children?: React.ReactNode;
}

export const Name = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="name">Full name</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Input
        id="name"
        name="name"
        placeholder="Enter full name"
        spellCheck="false"
      />
    </div>
  );
};
