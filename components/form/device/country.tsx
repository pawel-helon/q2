import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const Country = () => {
  return (
    <>
      <Label htmlFor="country">Country</Label>
      <Select name="country" defaultValue="USA">
        <SelectTrigger>
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="USA">USA</SelectItem>
            <SelectItem value="France">France</SelectItem>
            <SelectItem value="Germany">Germany</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
