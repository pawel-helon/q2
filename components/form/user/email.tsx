import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  children?: React.ReactNode;
}

export function Email({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="name">Email</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Input
        id="email"
        name="email"
        placeholder="Enter email address"
        spellCheck="false"
      />
    </div>
  );
}
