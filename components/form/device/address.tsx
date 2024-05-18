import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Address = () => {
  return (
    <>
      <Label htmlFor="streetAddress">Address</Label>
      <Input
        id="streetAddress"
        name="streetAddress"
        placeholder="Enter address"
        spellCheck="false"
      />
    </>
  );
};
