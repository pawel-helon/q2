import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Name = () => {
  return (
    <>
      <Label htmlFor="name">Full name</Label>
      <Input
        id="name"
        name="name"
        placeholder="Enter full name"
        spellCheck="false"
      />
    </>
  );
};
