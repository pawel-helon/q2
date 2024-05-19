import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DeviceName({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="deviceName">Device name</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Input
        id="deviceName"
        name="deviceName"
        placeholder="Enter device name"
        spellCheck="false"
      />
    </div>
  );
}
