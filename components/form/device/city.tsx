import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function City({ defaultValue, children }: {
  defaultValue?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="city">City</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="city" defaultValue={defaultValue}>
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
    </div>
  );
};
