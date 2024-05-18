import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const DeviceName = () => {
  return (
    <>
      <Label htmlFor="deviceName">Device name</Label>
      <Input
        id="deviceName"
        name="deviceName"
        placeholder="Enter device name"
        spellCheck="false"
      />
    </>
  );
};
