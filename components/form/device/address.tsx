import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Address({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="streetAddress">Address</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>

      <Input
        id="streetAddress"
        name="streetAddress"
        placeholder="Enter address"
        spellCheck="false"
      />
    </div>
  );
}
