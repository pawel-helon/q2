import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const Model = () => {
  return (
    <>
      <Label htmlFor="model">Model</Label>
      <Select name="model">
        <SelectTrigger>
          <SelectValue placeholder="Select model" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="MP-28">MP-28</SelectItem>
            <SelectItem value="NX-356">NX-356</SelectItem>
            <SelectItem value="MZ-12">MZ-12</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
