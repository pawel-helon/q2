import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function Country({ defaultValue, children }: { defaultValue?: string, children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="country">Country</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="country" defaultValue={defaultValue}>
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
    </div>
  );
}
