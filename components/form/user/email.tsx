import { Label } from "@/components/ui/label"; 
import { Input } from "@/components/ui/input";

export const Email = () => {
  return (
    <>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        placeholder="Enter email address"
        spellCheck="false"
      />
    </>
  );
};
