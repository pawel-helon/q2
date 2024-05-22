import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function Model({ defaultValue, children }: { defaultValue?: string, children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="model">Model</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="model" defaultValue={defaultValue}>
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
    </div>
  );
}
