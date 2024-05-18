import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const City = () => {
  return (
    <>
      <Label htmlFor="city">City</Label>
      <Select name="city">
        <SelectTrigger>
          <SelectValue placeholder="Select city" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Austin">Austin</SelectItem>
            <SelectItem value="Dallas">Dallas</SelectItem>
            <SelectItem value="Boston">Boston</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
